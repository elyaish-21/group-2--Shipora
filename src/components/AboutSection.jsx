import React, { useEffect, useState, useRef } from "react";

export default function AboutSection() {
  const [years, setYears] = useState(1);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const base = import.meta.env.BASE_URL; // Added for correct image path

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Run only once
        }
      },
      { threshold: 0.3 } // triggers when 30% of section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return; // Don't start counting until visible

    let start = 1;
    const end = 25;
    const duration = 2000;
    const stepTime = Math.abs(Math.floor(duration / (end - start)));

    const timer = setInterval(() => {
      start += 1;
      setYears(start);
      if (start === end) clearInterval(timer);
    }, stepTime);

    return () => clearInterval(timer);
  }, [isVisible]);

  return (
    <section
      id="about"
      className="py-20 bg-white"
      ref={sectionRef} // Reference for Intersection Observer
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Image block */}
        <div className="relative flex flex-col items-start">
          {/* Blue line ABOVE the image */}
          <div className="w-[60%] h-[5px] bg-brand-blue rounded mb-4"></div>

          <div className="relative">
            {/* Black line on left */}
            <div className="absolute -left-5 top-10 h-[60%] w-[5px] bg-black rounded"></div>

            {/* Main image */}
            <img
              src={`${base}images/Cargo.jpg`}
              alt="Cargo ship"
              className="rounded-2xl shadow-lg w-full h-[480px] object-cover"
            />

            {/* 25 Years Badge */}
            <div className="absolute bottom-6 right-6 bg-brand-blue text-white rounded-xl shadow-lg px-8 py-5 text-center">
              <div className="text-5xl font-extrabold leading-tight">
                {years}
              </div>
              <div className="text-sm uppercase tracking-widest">
                Years of Experience
              </div>
            </div>
          </div>
        </div>

        {/* Text block */}
        <div>
          <span className="inline-block bg-blue-100 text-brand-blue text-base font-semibold px-3 py-1 rounded">
            Why We Are
          </span>
          <h2 className="mt-4 text-4xl font-extrabold text-slate-900 leading-snug">
            Powerful Shipping Network Built For Modern Businesses
          </h2>
          <p className="mt-4 text-2xl font-bold italic text-slate-900 border-b-4 border-brand-blue inline-block pb-1">
            Powerful Logistics. Worldwide Cargo Delivery.
          </p>
          <p className="mt-4 text-slate-600 max-w-lg">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or slightly believable.
          </p>
          <a
            href="#more"
            className="mt-8 inline-block bg-black text-white px-8 py-3 rounded-md hover:bg-blue-600 transition-colors duration-300"
          >
            Read More
          </a>
        </div>
      </div>
    </section>
  );
}
