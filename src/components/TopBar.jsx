import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

export default function TopBar() {
  return (
    <div className="bg-black text-white text-xs sm:text-sm">
      <div className="container-max py-2 flex flex-col sm:flex-row gap-2 sm:gap-6 justify-between items-center">
        
        {/* Left side contact info */}
        <div className="flex gap-4">
          <span>📞 +63-956-150-9151</span>
          <span>✉️ admin@jaehubservices.com</span>
        </div>

        {/* Right side links and icons */}
        <div className="flex gap-4 items-center">
          <a href="#" className="hover:underline">FAQ</a>
          <a href="#" className="hover:underline">News</a>

          {/* Social media icons */}
          <div className="flex gap-3 ml-2">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
              <FaFacebookF size={14} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
              <FaInstagram size={14} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400">
              <FaTwitter size={14} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
