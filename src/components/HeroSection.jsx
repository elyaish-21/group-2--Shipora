import React from "react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-[#d9ebf7] to-white">
      <div className="container-max py-16 md:py-24 grid md:grid-cols-2 items-center gap-10">
        {/* Text */}
        <div>
          <span className="inline-block bg-brand-blue text-white text-base font-semibold px-3 py-1 rounded mb-2">
            We Ship Your Hope
          </span>
          <h1 className="mt-4 text-3xl md:text-5xl font-extrabold leading-tight text-slate-900">
            We Move Your Dream Forward To Build Your Future
          </h1>
          <p className="mt-4 text-slate-600">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#about"
              className="bg-black text-white px-8 py-3 rounded-md hover:bg-blue-600 transition-colors duration-300"
            >
              Read More
            </a>
            <a
              href="#contact"
              className="bg-black text-white px-8 py-3 rounded-md hover:bg-blue-600 transition-colors duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>

        {/* Imagery */}
        <div className="relative">
          <div className="grid grid-cols-2 gap-4">
            {/* EXPORT */}
            <div className="aspect-[4/3] rounded-2xl bg-white shadow-soft overflow-hidden">
              <img
                src="/images/Export.png"
                alt="Export Containers"
                className="w-full h-full object-cover"
              />
            </div>

            {/* IMPORT */}
            <div className="aspect-[4/3] rounded-2xl bg-white shadow-soft overflow-hidden">
              <img
                src="/images/Import.png"
                alt="Import Containers"
                className="w-full h-full object-cover"
              />
            </div>

            {/* GLOBAL FREIGHT NETWORK */}
            <div className="col-span-2 aspect-[16/9] rounded-2xl bg-white shadow-soft overflow-hidden">
              <img
                src="/images/Cargo.jpg"
                alt="Global Freight Network"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
