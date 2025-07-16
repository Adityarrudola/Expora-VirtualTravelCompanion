import React, { useEffect, useState } from "react";
import { useAuth } from "react-oidc-context";
import { useLocation } from "react-router-dom";
import exporaLogo from "../assets/images/expora2.png";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Header = () => {
  const auth = useAuth();
  const [scrolled, setScrolled] = useState(false);

 
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);


  useEffect(() => {
    if (auth.isAuthenticated) {
      const name = auth.user?.profile?.email?.split("@")[0] ?? "traveller";
      const flagKey = `welcomeToastShown_${name}`;

      if (!sessionStorage.getItem(flagKey)) {
        toast.success(`Welcome ${name}! 🌍`, {
          position: "top-center",
          autoClose: 3000,
        });
        sessionStorage.setItem(flagKey, "1");
      }
    }
  }, [auth.isAuthenticated]);


  const authButton = (() => {
    if (auth.isLoading) return null;

    if (auth.isAuthenticated) {
      return (
        <button
          onClick={() => {
           
            const name = auth.user?.profile?.email?.split("@")[0];
            sessionStorage.removeItem(`welcomeToastShown_${name}`);
            auth.signoutRedirect();
          }}
          className="hover:text-cyan-500 transition-colors"
        >
          SIGN&nbsp;OUT
        </button>
      );
    }


    return (
      <button
        onClick={() => auth.signinRedirect()}
        className="hover:text-cyan-500 transition-colors"
      >
        SIGN&nbsp;IN
      </button>
    );
  })();


  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 flex justify-center transition-all duration-300 ${
        scrolled ? "backdrop-blur bg-[#0c0f1a]/80 shadow-lg" : "bg-transparent"
      }`}
    >
      <nav className="flex justify-between items-center gap-4 p-6 text-white text-[17px] font-[600] w-[90%] md:w-[70%]">
        <a href="/#hero" className="hover:text-cyan-500">HOME</a>
        <span className="hidden sm:inline text-cyan-500 font-bold">|</span>

        <a href="/#about" className="hover:text-cyan-500">ABOUT</a>
        <span className="hidden sm:inline text-cyan-500 font-bold">|</span>
        <img src={exporaLogo} alt="EXPORA" className="w-[180px] sm:w-[230px]" />
        <span className="hidden sm:inline text-cyan-500 font-bold">|</span>

        {authButton}
        <span className="hidden sm:inline text-cyan-500 font-bold">|</span>

        <a href="/#footer" className="hover:text-cyan-500">CONTACT&nbsp;US</a>
      </nav>
    </header>
  );
};

export default Header;
