import React, { useState, useRef } from "react";
import { FaPlus } from "react-icons/fa";"

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
    document.body.style.cursor = 'grabbing';
    document.body.style.userSelect = 'none';
  };

  const handleMouseLeave = () => {
    setIsHoveringSlider(false);
    setIsDragging(false);
    setHoveredCard(null);
    document.body.style.cursor = '';
    document.body.style.userSelect = '';
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    document.body.style.cursor = '';
    document.body.style.userSelect = '';
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
    document.body.style.cursor = 'grab';
  };

  const handleSliderLeave = () => {
    if (!isDragging) {
      setIsHoveringSlider(false);
      document.body.style.cursor = '';
    }
  };

  const styles = {
    projectsSection: {
      fontFamily: "Arial, sans-serif",
      maxWidth: "100%",
      margin: "0 auto",
      padding: "130px 10px",
      overflow: "hidden",
    },
    container: {
      display: "flex",
      flexDirection: "column",
    },
    titleContainer: {
      backgroundColor: "#E6F1FD",
      padding: "6px 14px",
      width: "fit-content",
      marginBottom: "15px",
      borderRadius: "10px",
      marginLeft: "250px",
    },
    sectionTitle: {
      fontSize: "17px",
      color: "#1E90FF",
      margin: 0,
      fontWeight: "600",
      fontFamily: "'Jost', sans-serif",
    },
    headingRow: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "40px",
      paddingRight: "20px",
      paddingLeft: "250px",
    },
    sectionHeading: {
      fontSize: "50px",
      fontFamily: "'Jost', sans-serif",
      color: "#000",
      margin: 0,
      fontWeight: "700",
    },
    projectsContainer: {
      position: "relative",
      width: "100%",
      marginBottom: "30px",
    },
    projectsRow: {
      display: "flex",
      gap: "20px",
      width: "100%",
      cursor: isDragging ? 'grabbing' : 'grab',
      overflowX: "auto",
      scrollSnapType: "x mandatory",
      scrollBehavior: "smooth",
      WebkitOverflowScrolling: "touch",
      "&::-webkit-scrollbar": {
        display: "none",
      },
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
    projectImage: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      backgroundColor: "#f5f5f5",
      transition: "transform 0.3s ease",
    },
    portfolioOverlay: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      display: "flex",
      flexDirection: "column",
      opacity: 0,
      transition: "opacity 0.3s ease",
      overflow: "hidden",
    },
    overlayTop: {
      height: "50%",
      width: "100%",
      backgroundColor: "rgba(70, 130, 250, 0.9)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      transform: "translateY(-100%)",
      transition: "transform 0.3s ease",
    },
    overlayBottom: {
      height: "50%",
      width: "100%",
      backgroundColor: "rgba(0, 0, 0, 0.9)",
      color: "white",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      padding: "20px",
      transform: "translateY(100%)",
      transition: "transform 0.3s ease",
      position: "relative",
    },
    projectIcon: {
      width: "120px",
      height: "120px",
      objectFit: "contain",
    },
    projectTitle: {
      fontSize: "20px",
      fontWeight: "bold",
      marginBottom: "20px",
      textAlign: "center",
    },
    projectDescription: {
      fontSize: "14px",
      lineHeight: "1.5",
      marginBottom: "60px",
      textAlign: "center",
    },
    plusButtonContainer: {
      position: "absolute",
      bottom: "20px",
      left: "50%",
      transform: "translateX(-50%)",
      width: "40px",
      height: "40px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: "8px",
      backgroundColor: "rgba(70, 130, 250, 0.9)",
      transition: "transform 0.2s ease",
      "&:hover": {
        transform: "translateX(-50%) scale(1.1)",
      }
    },
    plusButton: {
      backgroundColor: "transparent",
      color: "white",
      border: "none",
      width: "100%",
      height: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      cursor: "pointer",
      padding: 0,
      borderRadius: "8px",
    },
    largeReadMoreButton: {
      backgroundColor: "#080808ff",
      color: "white",
      border: "none",
      padding: "14px 35px", // increased size
      fontSize: "14px", // larger text
      cursor: "pointer",
      borderRadius: "10px",
      fontWeight: "500",
      boxShadow: "0 4px 10px rgba(0, 123, 255, 0.3)",
      transition: "background-color 0.3s ease, transform 0.2s ease",
    },
    largeReadMoreButtonHover: {
      backgroundColor: "#0056b3", // darker blue on hover
      transform: "scale(1.05)",
    }

  };

  const projects = [
    {
      id: 1,
      title: "Route Design",
      description: "Planning the most efficient paths for deliveries.",
      image: "images/WhatWeDelivered1.jpg",
      icon: "images/RouteDesign.png",
    },
    {
      id: 2,
      title: "Shipping Solutions",
      description: "Services that move goods quickly and safely.",
      image: "images/WhatWeDelivered2.jpg",
      icon: "images/ShippingSolutions.png",
    },
    {
      id: 3,
      title: "Cargo Management",
      description: "Organizing, tracking, and handling shipments.",
      image: "images/WhatWeDelivered3.jpg",
      icon: "images/CargoManagement.png",
    },
    {
      id: 4,
      title: "Logistics Network",
      description: "Connected hubs that move goods from origin to destination.",
      image: "/images/WhatWeDelivered4.jpg",
      icon: "/images/LogisticsNetwork.png",
    },
    {
      id: 5,
      title: "Supply Chain",
      description: "The complete process of producing and delivering products.",
      image: "/images/WhatWeDelivered5.jpg",
      icon: "/images/ltrackingWHITE.png",
    },
  ];

  return (
    <section style={styles.projectsSection}>
      <div style={styles.container}>
        <div style={styles.titleContainer}>
          <h2 style={styles.sectionTitle}>Our Projects</h2>
        </div>

        <div style={styles.headingRow}>
          <h1 style={styles.sectionHeading}>What We Delivered</h1>
          <button
            style={styles.largeReadMoreButton}
            onMouseEnter={(e) => Object.assign(e.target.style, styles.largeReadMoreButtonHover)}
            onMouseLeave={(e) => Object.assign(e.target.style, styles.largeReadMoreButton)}
          >
            Read More
          </button>
        </div>

        <div
          style={styles.projectsContainer}
          onMouseEnter={handleSliderEnter}
          onMouseLeave={handleSliderLeave}
        >
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
                <img
                  src={project.image}
                  alt={project.title}
                  style={styles.projectImage}
                />
                <div
                  style={{
                    ...styles.portfolioOverlay,
                    opacity: hoveredCard === project.id ? 1 : 0,
                  }}
                >
                  <div style={{
                    ...styles.overlayTop,
                    transform: hoveredCard === project.id ? "translateY(0)" : "translateY(-100%)",
                  }}>
                    <img
                      src={project.icon}
                      alt={`${project.title} icon`}
                      style={styles.projectIcon}
                    />
                  </div>
                  <div style={{
                    ...styles.overlayBottom,
                    transform: hoveredCard === project.id ? "translateY(0)" : "translateY(100%)",
                  }}>
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
