import React, { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur shadow">
        <div className="container-max py-4 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <img src="/images/jaehub-logo.png" alt="JAEHub" className="h-10 w-10 rounded-lg shadow-soft" />
            <span className="text-xl font-bold">JAE Hub</span>
          </a>

          {/* Desktop nav */}
          <nav className="flex items-center gap-8 font-medium text-slate-700">
            <a href="#" className="hover:text-brand-blue">Home</a>
            <a href="#about" className="hover:text-brand-blue">About</a>
            <a href="#services" className="hover:text-brand-blue">Services</a>
            <a href="#contact" className="hover:text-brand-blue">Contact</a>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <a href="#contact" className="btn-dark">Contact Us</a>
          </div>

          {/* Toggle */}
          <button
            onClick={() => setOpen(true)}
            className="inline-flex items-center justify-center h-10 w-10 rounded-lg border border-slate-200 ml-2"
            aria-label="Toggle menu"
          >
            <span className="text-2xl">☰</span>
          </button>
        </div>
      </header>

      {/* Side Panel */}
      {open && (
        <div className="fixed inset-0 z-50 flex">
          {/* Overlay */}
          <div
            className="flex-1 bg-black/50"
            onClick={() => setOpen(false)}
          ></div>

          {/* Sidebar */}
          <div className="w-80 bg-white h-full shadow-lg p-6 overflow-y-auto animate-slideIn">
            {/* Close */}
            <button
              onClick={() => setOpen(false)}
              className="text-2xl mb-4"
            >
              ✕
            </button>

            {/* Logo */}
            <div className="flex items-center gap-2 mb-6">
              <img src="/shipora-logo.png" alt="Shipora" className="h-8" />
              <span className="text-lg font-bold">Shipora</span>
            </div>

            {/* Title */}
            <h2 className="text-lg font-bold mb-6">Contact Us For Any Informations</h2>

            {/* Contact Number */}
            <div className="flex items-start gap-3 mb-5">
              <svg className="w-8 h-8 text-blue-500 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M22 16.92V21a1 1 0 0 1-1.09 1A19.91 19.91 0 0 1 3 5.09 1 1 0 0 1 4 4h4.09a1 1 0 0 1 1 .75 12.05 12.05 0 0 0 .65 2.27 1 1 0 0 1-.24 1.11L8.09 9.91a16 16 0 0 0 6 6l1.78-1.41a1 1 0 0 1 1.11-.24 12.05 12.05 0 0 0 2.27.65 1 1 0 0 1 .75 1V20a1 1 0 0 1-1.08 1z" />
              </svg>
              <div>
                <h3 className="font-semibold">Contact Number</h3>
                <p>+001 123 456 790</p>
                <p>(02) 3424 44 00</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-3 mb-5">
              <svg className="w-8 h-8 text-blue-500 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M4 4h16v16H4z" stroke="none" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              <div>
                <h3 className="font-semibold">Email Address</h3>
                <p>info@yourdomain.com</p>
                <p>example@support.com</p>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start gap-3 mb-5">
              <svg className="w-8 h-8 text-blue-500 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                <circle cx="12" cy="9" r="2.5" />
              </svg>
              <div>
                <h3 className="font-semibold">Address</h3>
                <p>2005 Stokes Isle Apt. 896, Venaville 10010, USA</p>
              </div>
            </div>

            {/* Get In Touch */}
            <h3 className="text-lg font-bold mt-8 mb-2">Get In Touch</h3>
            <div className="w-10 border-b-2 border-blue-500 mb-4"></div>

            <form className="flex flex-col gap-3">
              <input type="text" placeholder="Your Name" className="border p-2 rounded" />
              <input type="email" placeholder="Your Email" className="border p-2 rounded" />
              <textarea placeholder="Type Message" className="border p-2 rounded"></textarea>
              <button type="submit" className="bg-blue-600 text-white py-2 rounded">Send Message</button>
            </form>
          </div>
        </div>
      )}

      {/* Animation */}
      <style>{`
        @keyframes slideIn {
          from { transform: translateX(-100%); }
          to { transform: translateX(0); }
        }
        .animate-slideIn {
          animation: slideIn 0.3s ease-out forwards;
        }
      `}</style>
    </>
  );
}
