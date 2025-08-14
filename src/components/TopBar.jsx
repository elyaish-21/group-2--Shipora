import React from "react";

export default function TopBar() {
  return (
    <div className="bg-black text-white text-xs sm:text-sm">
      <div className="container-max py-2 flex flex-col sm:flex-row gap-2 sm:gap-6 justify-between items-center">
        <div className="flex gap-4">
          <span>📞 +63-956-150-9151</span>
          <span>✉️ admin@jaehubservices.com</span>
        </div>
        <div className="flex gap-4">
          <a href="#" className="hover:underline">FAQ</a>
          <a href="#" className="hover:underline">News</a>
          <a href="#" className="hover:underline">Contact</a>
        </div>
      </div>
    </div>
  );
}
