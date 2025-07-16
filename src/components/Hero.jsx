import React from "react";
import { useAuth } from "react-oidc-context";
import { useNavigate } from "react-router-dom";       
import heroBackground from "../assets/images/travel.png";

const Hero = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  const handleClick = () => {
    if (auth.isAuthenticated) {
      navigate("/search");            
    } else {
      auth.signinRedirect();          
    }
  };

  return (
    <section id = "hero"
      className="h-[800px] bg-no-repeat bg-right bg-cover flex items-center"
      style={{ backgroundImage: `url(${heroBackground})` }}
    >
      <div className="w-full max-w-7xl mx-auto px-6 flex items-center">
        <div className="max-w-xl text-white space-y-6">
          <p className="text-sm tracking-widest font-semibold text-lime-300 uppercase">
            360 Degrees Virtual Tour
          </p>

          <h1 className="text-7xl font-extrabold leading-tight uppercase">
            Effortlessly <br /> Explore
          </h1>

          <p className="text-xl text-gray-400 font-medium">
            Experience the world like never before with our Virtual Travel
            Companion—bringing you 360‑degree immersive tours of breathtaking
            destinations worldwide.
          </p>

    
          <button
            onClick={handleClick}
            disabled={!auth.isAuthenticated}
            className={`px-8 py-4 rounded-lg font-semibold transition
              ${
                auth.isAuthenticated
                  ? "bg-cyan-500 hover:bg-cyan-600 text-white cursor-pointer"
                  : "bg-gray-500/40 text-gray-300 cursor-not-allowed"
              }`}
          >
            {auth.isAuthenticated ? "View 360° Tours" : "Sign In to View Tours"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
