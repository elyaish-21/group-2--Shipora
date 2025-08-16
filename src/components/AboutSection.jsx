import React from "react";

export default function AboutSection() {
  const base = import.meta.env.BASE_URL;

  return (
    <section className="py-16 md:py-24 bg-gray-50" id="about">
      <div className="container mx-auto grid md:grid-cols-2 items-center gap-10">
        
        {/* Image */}
        <div className="aspect-[4/3] rounded-2xl bg-white shadow-soft overflow-hidden">
          <img
            src={`${base}images/Cargo.jpg`}
            alt="About Us"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text Content */}
        <div>
          <span className="inline-block bg-brand-blue text-white text-sm font-semibold px-3 py-1 rounded mb-2">
            About Us
          </span>

          <h2 className="mt-4 text-3xl md:text-4xl font-extrabold leading-tight text-slate-900">
            Delivering Trust Across the Globe
          </h2>

          <p className="mt-4 text-slate-600">
            Our company is committed to providing world-class shipping services. 
            With years of experience, we specialize in connecting businesses 
            and individuals to markets around the world with efficiency and care.
          </p>

          <p className="mt-4 text-slate-600">
            Whether you're importing or exporting, our trusted team ensures 
            your cargo arrives safely and on time.
          </p>

          <a
            href="#contact"
            className="inline-block mt-6 bg-black text-white px-8 py-3 rounded-md hover:bg-blue-600 transition-colors duration-300"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}
