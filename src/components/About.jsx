import React from "react";
import { FaGlobeAsia, FaMapMarkedAlt, FaUserFriends } from "react-icons/fa";

const About = () => {
  return (
    <section
      id="about"
      className="relative text-gray-300 py-24 px-6 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto space-y-16 relative">
       
        <header className="text-center space-y-4">
          <p className="text-lime-300 tracking-widest font-semibold uppercase">
            What Is Expora?
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">
            Your Pocket‑Sized <span className="text-cyan-400">Travel Companion</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg">
            We bring the world’s most breathtaking destinations to your screen
            through immersive 360° panoramas, insider facts, and fun trivia—so
            you can explore, learn, and plan, all in one place.
          </p>
        </header>

        <div className="grid gap-10 md:grid-cols-3">
          <div className="bg-gray-800/60 rounded-2xl p-8 flex flex-col items-center text-center hover:bg-gray-800 transition">
            <FaGlobeAsia className="text-4xl text-cyan-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Explore Globally</h3>
            <p>
              From the Taj Mahal to Machu Picchu, wander the planet without
              leaving your chair.
            </p>
          </div>
          <div className="bg-gray-800/60 rounded-2xl p-8 flex flex-col items-center text-center hover:bg-gray-800 transition">
            <FaMapMarkedAlt className="text-4xl text-cyan-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Plan Smarter</h3>
            <p>
              Snapshot facts, cultural tips, and travel trivia help you craft
              an unforgettable itinerary.
            </p>
          </div>
          <div className="bg-gray-800/60 rounded-2xl p-8 flex flex-col items-center text-center hover:bg-gray-800 transition">
            <FaUserFriends className="text-4xl text-cyan-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Share the Journey</h3>
            <p>
              Invite friends or clients by link. Let them step inside the same
              360° scene you’re viewing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
