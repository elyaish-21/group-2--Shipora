import React, { useState, useRef } from "react";
import { FaPlus } from "react-icons/fa";

import project1 from "/images/WhatWeDelivered1.jpg";
import project2 from "/images/WhatWeDelivered2.jpg";
import project3 from "/images/WhatWeDelivered3.jpg";
import project4 from "/images/WhatWeDelivered4.jpg";
import project5 from "/images/WhatWeDelivered5.jpg";

import icon1 from "/images/RouteDesign.png";
import icon2 from "/images/ShippingSolutions.png";
import icon3 from "/images/CargoManagement.png";
import icon4 from "/images/LogisticsNetwork.png";
import icon5 from "/images/ltrackingWHITE.png";

const ProjectsSection = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const sliderRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isHoveringSlider, setIsHoveringSlider] = useState(false);

  const handleMouseDown = (e) => {
    if (!isHoveringSlider) return;
    setIsDragging(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
    document.body.style.cursor = "grabbing";
    document.body.style.userSelect = "none";
  };

  const handleMouseLeave = () => {
    setIsHoveringSlider(false);
    setIsDragging(false);
    setHoveredCard(null);
    document.body.style.cursor = "";
    document.body.style.userSelect = "";
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    document.body.style.cursor = "";
    document.body.style.userSelect = "";
  };

  const handleMouseMove = (e) => {
    if (!isDragging || !isHoveringSlider) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleSliderEnter = () => {
    setIsHoveringSlider(true);
    document.body.style.cursor = "grab";
  };

  const handleSliderLeave = () => {
    if (!isDragging) {
      setIsHoveringSlider(false);
      document.body.style.cursor = "";
    }
  };

  const projects = [
    { id: 1, title: "Route Design", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", image: project1, icon: icon1 },
    { id: 2, title: "Shipping Solutions", description: "Sed do eiusmod tempor incididunt ut labore et dolore.", image: project2, icon: icon2 },
    { id: 3, title: "Cargo Management", description: "Ut enim ad minim veniam, quis nostrud exercitation.", image: project3, icon: icon3 },
    { id: 4, title: "Logistics Network", description: "Duis aute irure dolor in reprehenderit in voluptate.", image: project4, icon: icon4 },
    { id: 5, title: "Supply Chain", description: "Excepteur sint occaecat cupidatat non proident.", image: project5, icon: icon5 },
  ];

  const styles = {
    projectsSection: {
      fontFamily: "Arial, sans-serif",
      maxWidth: "100%",
      margin: "0 auto",
      padding: "50px 30px",
      overflow: "hidden",
    },
    container: { display: "flex", flexDirection: "column" },

    titleContainer: {
      backgroundColor: "#f0f6ff",
      padding: "6px 10px",
      width: "fit-content",
      margin: "20px 20px 20px 160px",
      borderRadius: "6px",
    },
    sectionTitle: {
      fontSize: "16px",
      color: "#1a56db", 
      margin: 0,
      textAlign: "left",
      fontWeight: "600",
    },
    headingRow: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "40px",
      paddingLeft: "160px",
    },
    sectionHeading: {
      fontSize: "45px",
      fontFamily: "'Jost', sans-serif",
      color: "#000",
      margin: 0,
      textAlign: "left",
      fontWeight: "bold",
    },

    projectsContainer: { position: "relative", width: "100%", marginBottom: "30px" },
    projectsRow: {
      display: "flex",
      gap: "20px",
      width: "100%",
      cursor: isDragging ? "grabbing" : "grab",
      overflowX: "auto",
      scrollSnapType: "x mandatory",
      scrollBehavior: "smooth",
      WebkitOverflowScrolling: "touch",
      "&::-webkit-scrollbar": { display: "none" },
      paddingBottom: "20px",
    },
    projectCard: {
      border: "1px solid #eee",
      borderRadius: "8px",
      overflow: "hidden",
      boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
      transition: "all 0.3s ease",
      width: "calc(20% - 16px)",
      minWidth: "calc(20% - 16px)",
      flexShrink: 0,
      position: "relative",
      scrollSnapAlign: "start",
      height: "350px",
    },
    projectImage: { width: "100%", height: "100%", objectFit: "cover", backgroundColor: "#f5f5f5", transition: "transform 0.3s ease" },
    portfolioOverlay: {
      position: "absolute",
      top: 0, left: 0, right: 0, bottom: 0,
      display: "flex", flexDirection: "column",
      opacity: 0, transition: "opacity 0.3s ease",
      overflow: "hidden",
    },
    overlayTop: {
      height: "50%", width: "100%",
      backgroundColor: "rgba(70, 130, 250, 0.9)",
      display: "flex", justifyContent: "center", alignItems: "center",
      transform: "translateY(-100%)", transition: "transform 0.3s ease",
    },
    overlayBottom: {
      height: "50%", width: "100%",
      backgroundColor: "rgba(0, 0, 0, 0.9)", color: "white",
      display: "flex", flexDirection: "column",
      justifyContent: "center", alignItems: "center",
      padding: "20px",
      transform: "translateY(100%)", transition: "transform 0.3s ease",
      position: "relative",
    },
    projectIcon: { width: "120px", height: "120px", objectFit: "contain" },
    projectTitle: { fontSize: "20px", fontWeight: "bold", marginBottom: "20px", textAlign: "center" },
    projectDescription: { fontSize: "14px", lineHeight: "1.5", marginBottom: "60px", textAlign: "center" },
    plusButtonContainer: {
      position: "absolute", bottom: "20px", left: "50%", transform: "translateX(-50%)",
      width: "40px", height: "40px",
      display: "flex", justifyContent: "center", alignItems: "center",
      borderRadius: "8px", backgroundColor: "blue",
      transition: "transform 0.2s ease",
      "&:hover": { transform: "translateX(-50%) scale(1.1)" },
    },
    plusButton: {
      backgroundColor: "transparent", color: "white", border: "none",
      width: "100%", height: "100%",
      display: "flex", justifyContent: "center", alignItems: "center",
      cursor: "pointer", padding: 0, borderRadius: "8px",
    },

    // 🔹 Read More button
    largeReadMoreButton: {
      backgroundColor: "#1a56db",
      color: "white",
      border: "none",
      padding: "10px 22px",
      fontSize: "15px",
      cursor: "pointer",
      borderRadius: "6px",
      fontWeight: "400", // not bold
      transition: "all 0.3s ease",
    },
  };

  return (
    <section style={styles.projectsSection}>
      <div style={styles.container}>
        <div style={styles.titleContainer}>
          <h2 style={styles.sectionTitle}>Our Projects</h2>
        </div>

        <div style={styles.headingRow}>
          <h1 style={styles.sectionHeading}>What We Delivered</h1>
          <button style={styles.largeReadMoreButton}>Read More</button>
        </div>

        <div style={styles.projectsContainer} onMouseEnter={handleSliderEnter} onMouseLeave={handleSliderLeave}>
          <div
            style={styles.projectsRow}
            ref={sliderRef}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
          >
            {projects.map((project) => (
              <div
                key={project.id}
                style={styles.projectCard}
                onMouseEnter={() => setHoveredCard(project.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <img src={project.image} alt={project.title} style={styles.projectImage} />
                <div
                  style={{
                    ...styles.portfolioOverlay,
                    opacity: hoveredCard === project.id ? 1 : 0,
                  }}
                >
                  <div
                    style={{
                      ...styles.overlayTop,
                      transform: hoveredCard === project.id ? "translateY(0)" : "translateY(-100%)",
                    }}
                  >
                    <img src={project.icon} alt={`${project.title} icon`} style={styles.projectIcon} />
                  </div>
                  <div
                    style={{
                      ...styles.overlayBottom,
                      transform: hoveredCard === project.id ? "translateY(0)" : "translateY(100%)",
                    }}
                  >
                    <h3 style={styles.projectTitle}>{project.title}</h3>
                    <p style={styles.projectDescription}>{project.description}</p>
                    <div style={styles.plusButtonContainer}>
                      <button style={styles.plusButton}>
                        <FaPlus size={20} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;