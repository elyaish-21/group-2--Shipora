import React from "react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-slate-900 text-slate-200">
      <div className="container-max py-10 text-center">
        <p className="text-sm">
          © {new Date().getFullYear()}{" "}
          <a
            href="https://jaehubservices.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-blue hover:underline"
          >
            JAE Hub
          </a>
          . All rights reserved.
        </p>
      </div>
    </footer>
  );
}
