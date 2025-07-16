import React from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Hero from "./components/Hero";
import About from "./components/About";
import Search from "./pages/Search";
import Tour from "./pages/Tour";

const Home = () => (
  <> 
    <Hero />
    <About />
  </>
);

const App = () => (
  <>
    <Header />
      <main className="pt-24">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/tour/:placeName" element={<Tour />} />
        </Routes>
      </main>
    <Footer />
    <ToastContainer position="top-center" theme="dark" autoClose={3000} /> 
  </>
);

export default App;
