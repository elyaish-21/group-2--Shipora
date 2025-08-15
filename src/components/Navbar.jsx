import React, { useState } from "react";
import { FiSearch, FiChevronDown } from "react-icons/fi";
import jaelogo from "../../public/images/JaehubLogo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState({
    pages: false,
    portfolio: false,
    services: false,
    blog: false,
  });

  return (
    <>
      {/* Navbar */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur shadow">
        <div className="container-max py-4 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <img
              src={jaelogo}
              alt="JAEHub"
              className="h-12 w-auto object-contain"
            />
          </a>

          {/* Desktop Nav */}
          <nav className="flex items-center gap-8 font-medium text-slate-700">
            <a href="#" className="hover:text-brand-blue">Home</a>

            {/* Pages Dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1 hover:text-brand-blue">
                Pages <FiChevronDown size={16} />
              </button>
              <div className="absolute left-0 top-full hidden group-hover:block bg-white shadow-lg py-2 w-40">
                <a href="#about" className="block px-4 py-2 hover:bg-gray-100">About Us</a>
                <a href="#team" className="block px-4 py-2 hover:bg-gray-100">Team</a>
                <a href="#contact" className="block px-4 py-2 hover:bg-gray-100">Contact Us</a>
                <a href="#faq" className="block px-4 py-2 hover:bg-gray-100">FAQ</a>
                <a href="#error" className="block px-4 py-2 hover:bg-gray-100">Error 404</a>
              </div>
            </div>

            {/* Portfolio Dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1 hover:text-brand-blue">
                Portfolio <FiChevronDown size={16} />
              </button>
              <div className="absolute left-0 top-full hidden group-hover:block bg-white shadow-lg py-2 w-40">
                <a href="#portfolio1" className="block px-4 py-2 hover:bg-gray-100">Portfolio 1</a>
                <a href="#portfolio2" className="block px-4 py-2 hover:bg-gray-100">Portfolio 2</a>
              </div>
            </div>

            {/* Services Dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1 hover:text-brand-blue">
                Services <FiChevronDown size={16} />
              </button>
              <div className="absolute left-0 top-full hidden group-hover:block bg-white shadow-lg py-2 w-40">
                <a href="#service1" className="block px-4 py-2 hover:bg-gray-100">Service 1</a>
                <a href="#service2" className="block px-4 py-2 hover:bg-gray-100">Service 2</a>
              </div>
            </div>

            {/* Blog Dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1 hover:text-brand-blue">
                Blog <FiChevronDown size={16} />
              </button>
              <div className="absolute left-0 top-full hidden group-hover:block bg-white shadow-lg py-2 w-40">
                <a href="#blog1" className="block px-4 py-2 hover:bg-gray-100">Blog 1</a>
                <a href="#blog2" className="block px-4 py-2 hover:bg-gray-100">Blog 2</a>
              </div>
            </div>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
  {/* Search button */}
  <button className="text-slate-700 hover:text-brand-blue">
    <FiSearch size={20} />
  </button>

  {/* Hamburger menu - blue background */}
  <button
    onClick={() => setOpen(true)}
    className="inline-flex items-center justify-center h-10 w-10 rounded-lg bg-blue-600 text-white ml-2"
    aria-label="Toggle menu"
  >
    <span className="text-2xl">☰</span>
  </button>
</div>

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
            <button
              onClick={() => setOpen(false)}
              className="text-2xl mb-4"
            >
              ✕
            </button>

            {/* Logo */}
            <div className="flex items-center gap-2 mb-6">
              <img src={jaelogo} alt="JAEHub" className="h-8" />
              <span className="text-lg font-bold"></span>

            </div>

            {/* Contact Info */}
            <h2 className="text-lg font-bold mt-6 mb-2">Contact Us For Any Informations</h2>
            <div className="flex items-start gap-3 mb-5">
              <span>📞</span>
              <div>
                <h3 className="font-semibold">Contact Number</h3>
                <p>+63-956-150-9151</p>
                <p>046-884-4341</p>
              </div>
            </div>

            <div className="flex items-start gap-3 mb-5">
              <span>📧</span>
              <div>
                <h3 className="font-semibold">Email Address</h3>
                <p>admin@jaehubservices.com</p>
                <p>example@support.com</p>
              </div>
            </div>

            <div className="flex items-start gap-3 mb-5">
              <span>📍</span>
              <div>
                <h3 className="font-semibold">Address</h3>
                <p>Unit 1015 Winland Tower Tomas Morato Kristong Hari Quezon City 1101A</p>
              </div>
            </div>

            {/* Contact Form */}
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

