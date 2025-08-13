import React from "react";

export default function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="container-max grid md:grid-cols-2 gap-10 items-center">
        {/* Image block with badge */}
        <div className="relative">
          <img
            src="/about-ship.jpg"
            alt="Cargo ship"
            className="rounded-2xl shadow-soft w-full object-cover"
          />
          <div className="absolute -bottom-6 -left-6 bg-brand-blue text-white rounded-2xl shadow-soft px-6 py-5 text-center">
            <div className="text-4xl font-extrabold leading-tight">25</div>
            <div className="text-xs uppercase tracking-widest">Years Experience</div>
          </div>
        </div>

        {/* Text block */}
        <div>
          <span className="inline-block bg-blue-100 text-brand-blue text-xs font-semibold px-3 py-1 rounded">
            Why We Are
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-extrabold text-slate-900">
            Powerful Shipping Network Built For Modern Businesses
          </h2>
          <p className="mt-4 text-slate-600">
            Powerful Logistics. Worldwide Cargo Delivery. There are many
            variations of passages of Lorem Ipsum available, but the majority
            have suffered alteration in some form, by injected humour.
          </p>
          <a href="#more" className="btn-primary mt-6 inline-block">Read More</a>
        </div>
      </div>
    </section>
  );
}
