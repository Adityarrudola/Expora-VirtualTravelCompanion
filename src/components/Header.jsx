import React, { useEffect, useState } from "react";
import { useAuth } from "react-oidc-context";
import exporaLogo from "../assets/images/expora2.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useLocation } from "react-router-dom";

const Header = () => {
  const auth = useAuth();
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();


  // ────────────────────────────────────────────────
  // 1. Add background blur / color on scroll
  // ────────────────────────────────────────────────
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ────────────────────────────────────────────────
  // 2. Show toast once after login, using localStorage
  // ────────────────────────────────────────────────
  useEffect(() => {
    if (auth.isAuthenticated) {
      const name = auth.user?.profile?.email?.split("@")[0];
      const key = `welcomeToastShown_${name}`;

      if (!localStorage.getItem(key)) {
        toast.success(`Welcome ${name} to Expora!`, {
          theme: "dark",
          position: "top-center",
          autoClose: 3000,
        });
        localStorage.setItem(key, "1");
      }
    }
  }, [auth.isAuthenticated]);

  // ────────────────────────────────────────────────
  // 3. Render login/logout button
  // ────────────────────────────────────────────────
  const renderAuthLink = () => {
    if (auth.isLoading) return null;
    if (auth.error) return <span>Error</span>;

    return auth.isAuthenticated ? (
      <button
        onClick={() => auth.signoutRedirect()}
        className="hover:text-cyan-500 transition-colors"
      >
        SIGN&nbsp;OUT
      </button>
    ) : (
      <button
        onClick={() => auth.signinRedirect()}
        className="hover:text-cyan-500 transition-colors"
      >
        SIGN&nbsp;IN
      </button>
    );
  };

  // ────────────────────────────────────────────────
  // 4. JSX
  // ────────────────────────────────────────────────
  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 flex justify-center
        transition-all duration-300
        ${scrolled ? "backdrop-blur bg-[#0c0f1a]/80 shadow-lg" : "bg-transparent"}`}
      >
        <nav className="flex justify-between items-center gap-4 p-6 text-white text-[17px] font-[600] w-[90%] md:w-[70%]">
          {/* Left Nav */}
          <a href="/#hero" className="hover:text-cyan-500 transition-colors">
            HOME
          </a>
          <span className="hidden sm:inline text-cyan-500 font-bold">|</span>

          <a href="/#about" className="hover:text-cyan-500 transition-colors">
            ABOUT
          </a>

          {/* Logo */}
          <img
            src={exporaLogo}
            alt="EXPORA"
            className="w-[180px] sm:w-[230px]"
          />

          {/* Right Nav */}
          {renderAuthLink()}
          <span className="hidden sm:inline text-cyan-500 font-bold">|</span>

          <a
            href="/#footer"
            className="hover:text-cyan-500 transition-colors"
          >
            CONTACT US
          </a>
        </nav>
      </header>

      {/* Toast container (mount point) */}
      <ToastContainer />
    </>
  );
};

export default Header;
