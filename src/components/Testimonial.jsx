import React, { useState, useEffect } from "react";
import { BiSolidQuoteAltLeft, BiSolidQuoteAltRight } from "react-icons/bi";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

const styles = {
  section: {
    position: "relative",
    textAlign: "center",
    backgroundImage: "url(/images/ship.jpg)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    padding: "3rem 1rem",
    color: "white",
    overflow: "hidden",
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(6, 122, 247, 0.88)",
    zIndex: 1,
    pointerEvents: "none",
  },
  contentWrapper: {
    position: "relative",
    zIndex: 2,
  },
  badge: {
    background: "#ddeeffff",
    padding: "0.35rem 1rem",
    borderRadius: "15px",
    fontSize: "1rem",
    color: "#1E90FF",
    display: "inline-block",
    fontWeight: "500",
  },
  heading: {
    fontSize: "3rem",
    margin: "1rem 0 2rem",
    fontWeight: "700",
  },
  sliderContainer: {
    position: "relative",
    maxWidth: "1000px",
    margin: "0 auto",
  },
  sliderWrapper: {
    overflow: "hidden",
    width: "100%",
  },
  slider: {
    display: "flex",
    transition: "transform 0.3s ease-in-out",
  },
  card: {
    display: "flex",
    alignItems: "stretch",
    justifyContent: "center",
    background: "#000",
    borderRadius: "12px",
    overflow: "hidden",
    minWidth: "100%",
    boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
    position: "relative",
  },
  image: {
    width: "300px",
    objectFit: "cover",
  },
  content: {
    padding: "2rem 2.5rem",
    textAlign: "left",
    flex: "1",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    position: "relative",
  },
  nameRow: {
    display: "flex",
    alignItems: "center",
    gap: "0.75rem",
    marginBottom: "0.5rem",
  },
  quoteLeft: {
    fontSize: "7rem",
    color: "rgba(255,255,255,0.9)",
    flexShrink: 0,
  },
  quoteRight: {
    position: "absolute",
    bottom: "30px",
    right: "30px",
    fontSize: "3rem",
    color: "rgba(255,255,255,0.6)",
  },
  name: {
    fontSize: "1.7rem",
    fontWeight: "700",
    margin: "0",
  },
  title: {
    color: "#bbb",
    fontSize: "1.1rem",
    margin: "0.2rem 0 1.2rem",
  },
  text: {
    margin: "0 0 1.5rem",
    fontSize: "1.2rem",
    color: "#eee",
    lineHeight: "2.6",
  },
  rating: {
    color: "#ff7a00",
    fontWeight: "bold",
    display: "flex",
    alignItems: "center",
    gap: "0.6rem",
    fontSize: "2rem",
  },
  ratingText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: "1.4rem",
  },
  arrowBase: {
    background: "#000",
    border: "none",
    fontSize: "2rem",
    color: "white",
    width: "55px",
    height: "55px",
    cursor: "pointer",
    borderRadius: "8px",
    transition: "background 0.3s",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    lineHeight: "0",
    padding: 0,
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    zIndex: 3,
  },
  arrowLeft: {
    left: "-65px",
  },
  arrowRight: {
    right: "-65px",
  },
};

const testimonials = [
  {
    name: "Sarah De Guzman",
    title: "Fashion Brand Exporter",
    text: "Shipora makes shipping my fashion materials so easy. They always deliver on time and take great care of my packages.",
    image: "/images/AsianClient1.jpg",
  },
  {
    name: "John Santos",
    title: "Logistics Manager",
    text: "With Shipora, our shipments arrive when they should. They keep me updated and make the whole process smooth.",
    image: "/images/AsianClient2.jpg",
  },
];

const reviews = [
  { rating: 5, text: "Excellent Service" },
  { rating: 4.5, text: "Safe Handling" },
];

function Testimonial() {
  const [index, setIndex] = useState(0);

  const nextTestimonial = () =>
    setIndex((prev) => (prev + 1) % testimonials.length);
  const prevTestimonial = () =>
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));

  useEffect(() => {
    const timer = setInterval(() => {
      nextTestimonial();
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section style={styles.section}>
      <div style={styles.overlay}></div>
      <div style={styles.contentWrapper}>
        <span style={styles.badge}>Testimonial</span>
        <h2 style={styles.heading}>Asian Client Reviews</h2>

        <div style={styles.sliderContainer}>
          <button
            style={{ ...styles.arrowBase, ...styles.arrowLeft }}
            onClick={prevTestimonial}
            onMouseOver={(e) =>
              (e.currentTarget.style.background = "rgba(0,123,255,0.9)")
            }
            onMouseOut={(e) => (e.currentTarget.style.background = "#000")}
          >
            <FiArrowLeft />
          </button>

          <div style={styles.sliderWrapper}>
            <div
              style={{
                ...styles.slider,
                transform: `translateX(-${index * 100}%)`,
              }}
            >
              {testimonials.map(({ name, title, text, image }, i) => {
                const { rating, text: ratingText } = reviews[i];
                return (
                  <div key={i} style={styles.card}>
                    <img src={image} alt={name} style={styles.image} />
                    <div style={styles.content}>
                      <div style={styles.nameRow}>
                        <div style={styles.quoteLeft}>
                          <BiSolidQuoteAltLeft />
                        </div>
                        <div>
                          <h3 style={styles.name}>{name}</h3>
                          <p style={styles.title}>{title}</p>
                        </div>
                      </div>

                      <p style={styles.text}>{text}</p>
                      <div style={styles.rating}>
                        {Array.from({ length: 5 }, (_, starIndex) => {
                          if (rating >= starIndex + 1) {
                            return <FaStar key={starIndex} />;
                          } else if (rating >= starIndex + 0.5) {
                            return <FaStarHalfAlt key={starIndex} />;
                          } else {
                            return <FaRegStar key={starIndex} />;
                          }
                        })}
                        <span style={styles.ratingText}>{ratingText}</span>
                      </div>
                      <div style={styles.quoteRight}>
                        <BiSolidQuoteAltRight />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <button
            style={{ ...styles.arrowBase, ...styles.arrowRight }}
            onClick={nextTestimonial}
            onMouseOver={(e) =>
              (e.currentTarget.style.background = "rgba(0,123,255,0.9)")
            }
            onMouseOut={(e) => (e.currentTarget.style.background = "#000")}
          >
            <FiArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;