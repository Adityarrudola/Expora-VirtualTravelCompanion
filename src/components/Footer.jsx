import React from "react";
import exporaLogo from "../assets/images/expora2.png";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaXTwitter as FaX,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer id= "footer" className="text-gray-400 text-sm">

      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col items-center gap-8 text-center">

        <div className="space-y-4">
          <img src={exporaLogo} alt="EXPORA" className="w-40 mx-auto" />
          <p className="max-w-md">
            Expora is an open‑source side‑project by
            <span className="text-cyan-400"> Aditya Rudola </span>
            that lets you roam the globe through 360° panoramas built on AWS.
          </p>
        </div>

        <div className="space-y-3">
          <h4 className="text-lg text-white font-semibold">Connect</h4>
          <div className="flex gap-6 text-2xl justify-center">
            <a
              href="https://github.com/adityarrudola"
              aria-label="GitHub"
              className="hover:text-cyan-400 transition"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/aditya-rudola-11a950237/"
              aria-label="LinkedIn"
              className="hover:text-cyan-400 transition"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:adityarrudola@gmail.com"
              aria-label="Email"
              className="hover:text-cyan-400 transition"
              target="_blank"
              rel="noreferrer"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>

        <p>
          © {new Date().getFullYear()} Expora. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
