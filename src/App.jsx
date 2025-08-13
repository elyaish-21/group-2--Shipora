import React from "react";
import TopBar from "./components/TopBar";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import SectionOne from "./components/SectionOne";
import SectionTwo from "./components/SectionTwo";
import SectionThree from "./components/SectionThree";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="font-sans">
      <TopBar />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        {/* Placeholders you can customize later */}
        <SectionOne />
        <SectionTwo />
        <SectionThree />
      </main>
      <Footer />
    </div>
  );
}
