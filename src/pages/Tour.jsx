import { useEffect, useRef } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "react-oidc-context";
import * as THREE from "three";

export default function Tour() {
  const { state: place } = useLocation();
  const auth = useAuth();
  const viewerRef = useRef(null);

  if (!place) return <Navigate to="/search" replace />;

  if (!auth.isAuthenticated) {
    auth.signinRedirect();
    return null;
  }

  useEffect(() => {
    if (!viewerRef.current) return;

    window.THREE = THREE;

    let viewer, panorama;

    const loadViewer = async () => {
      try {
        const { Viewer, ImagePanorama } = await import("panolens");

        const image = new Image();
        image.crossOrigin = "anonymous";
        image.src = place.view360 ?? place.imgurl;

        image.onload = () => {
          panorama = new ImagePanorama(image.src);

          viewer = new Viewer({
            container: viewerRef.current,
            autoRotate: true,
            autoRotateSpeed: 0.3,
            output: "console",
          });

          viewer.add(panorama);
        };

        image.onerror = () => {
          console.error("Failed to load panorama image.");
        };
      } catch (err) {
        console.error("Failed to initialize panorama viewer", err);
      }
    };

    loadViewer();

    return () => {
      viewer?.dispose?.();
      if (viewerRef.current) viewerRef.current.innerHTML = "";
    };
  }, [place]);

  return <div ref={viewerRef} className="fixed inset-0 bg-black" />;
}
