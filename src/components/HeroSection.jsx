import React from "react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-[#d9ebf7] to-white">
      <div className="container-max py-16 md:py-24 grid md:grid-cols-2 items-center gap-10">
        {/* Text */}
        <div>
          <span className="inline-block bg-brand-blue text-white text-xs font-semibold px-3 py-1 rounded">
            We Ship Your Hope
          </span>
          <h1 className="mt-4 text-3xl md:text-5xl font-extrabold leading-tight text-slate-900">
            We Move Your Dream Forward To Build Your Future
          </h1>
          <p className="mt-4 text-slate-600">
            There are many variations of passages of Lorem Ipsum available, but the
            majority have suffered alteration in some form, by injected humour.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#about" className="btn-primary">Read More</a>
            <a href="#contact" className="btn-dark">Contact Us</a>
          </div>
        </div>

        {/* Imagery */}
        <div className="relative">
          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-[4/3] rounded-2xl bg-white shadow-soft grid place-items-center text-slate-500">
              <div className="text-center">
                <div className="text-4xl font-black">EXPORT</div>
                <div className="text-xs tracking-widest uppercase">Containers</div>
              </div>
            </div>
            <div className="aspect-[4/3] rounded-2xl bg-white shadow-soft grid place-items-center text-slate-500">
              <div className="text-center">
                <div className="text-4xl font-black">IMPORT</div>
                <div className="text-xs tracking-widest uppercase">Containers</div>
              </div>
            </div>
            <div className="col-span-2 aspect-[16/9] rounded-2xl bg-white shadow-soft grid place-items-center text-slate-500">
              <div className="text-center">
                <div className="text-3xl font-black">GLOBAL</div>
                <div className="text-xs tracking-widest uppercase">Freight Network</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
