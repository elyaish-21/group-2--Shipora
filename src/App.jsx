import React from "react";
import TopBar from "./components/TopBar";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import SectionOne from "./components/SectionOne";
import Team from "./components/Team";
import SectionThree from "./components/SectionThree";
import Testimonial from "./components/Testimonial";
import Blog from "./components/Blog";
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
        <Team />
        <SectionThree />
        <Blog />
        <Testimonial />
      </main>
      <Footer />
    </div>
  );
}
