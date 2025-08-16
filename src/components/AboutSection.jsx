import React from "react";

export default function AboutSection() {
  const base = import.meta.env.BASE_URL;

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container-max grid md:grid-cols-2 gap-10 items-center">

        {/* Image Side */}
        <div className="grid grid-cols-2 gap-4">
          {/* Export */}
          <div className="aspect-[4/3] rounded-2xl bg-white shadow-soft overflow-hidden">
            <img
              src={`${base}images/Export.png`}
              alt="Export Containers"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Import */}
          <div className="aspect-[4/3] rounded-2xl bg-white shadow-soft overflow-hidden">
            <img
              src={`${base}images/Import.png`}
              alt="Import Containers"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Cargo */}
          <div className="col-span-2 aspect-[16/9] rounded-2xl bg-white shadow-soft overflow-hidden">
            <img
              src={`${base}images/Cargo.jpg`}
              alt="Global Freight Network"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Text Side */}
        <div>
          <span className="inline-block bg-blue-100 text-blue-600 text-base font-semibold px-3 py-1 rounded mb-2">
            About Us
          </span>

          <h2 className="mt-4 text-3xl md:text-5xl font-extrabold leading-tight text-slate-900">
            Delivering Excellence Across the Globe
          </h2>

          <p className="mt-4 text-slate-600">
            Our company has been a trusted leader in logistics, shipping, and supply chain
            solutions for years. We combine cutting-edge technology with a dedicated team of
            professionals to move your dreams forward.
          </p>

          <p className="mt-4 text-slate-600">
            From freight forwarding to customs clearance, we ensure your cargo arrives safely,
            on time, and with the utmost care.
          </p>

          <a
            href="#contact"
            className="mt-6 inline-block bg-black text-white px-8 py-3 rounded-md hover:bg-blue-600 transition-colors duration-300"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}
