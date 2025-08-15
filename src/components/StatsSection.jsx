import React, { useEffect, useState } from "react";
import { FaShippingFast, FaSmile, FaFileContract, FaUserTie } from "react-icons/fa";

const statsData = [
  { id: 1, end: 535, label: "Successful Shipments", icon: <FaShippingFast size={100} color="rgba(255, 255, 255, 0.65)" /> },
  { id: 2, end: 387, label: "Happy Clients", icon: <FaSmile size={100} color="rgba(255,255,255,0.65)" /> },
  { id: 3, end: 275, label: "Active Contracts", icon: <FaFileContract size={100} color="rgba(255,255,255,0.65)" /> },
  { id: 4, end: 165, label: "Crew Members", icon: <FaUserTie size={100} color="rgba(255,255,255,0.65)" /> },
];

const StatCard = ({ end, label, icon }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const stepTime = Math.abs(Math.floor(duration / end));

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, stepTime);

    return () => clearInterval(timer);
  }, [end]);

  return (
    <div
      style={{
        background: "#007bff",
        padding: "40px",
        borderRadius: "15px",
        textAlign: "center",
        color: "#fff",
        fontFamily: "sans-serif",
        fontWeight: "bold",
        position: "relative",
        overflow: "hidden",
        cursor: "pointer",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-10px)";
        e.currentTarget.style.boxShadow = "0 12px 24px rgba(0,0,0,0.3)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      <div
        style={{
          position: "absolute",
          right: "15px",
          bottom: "15px",
          opacity: 0.3,
        }}
      >
        {icon}
      </div>
      <div style={{ fontSize: "80px", zIndex: 2, position: "relative" }}>{count}</div>
      <div style={{ fontSize: "22px", fontWeight: "normal", zIndex: 2, position: "relative" }}>{label}</div>
    </div>
  );
};

const StatsSection = () => {
  return (
    <div
      style={{
        background: "#0d0d0d",
        padding: "60px",
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "30px",
      }}
    >
      {statsData.map((stat) => (
        <StatCard key={stat.id} end={stat.end} label={stat.label} icon={stat.icon} />
      ))}
    </div>
  );
};

export default StatsSection;