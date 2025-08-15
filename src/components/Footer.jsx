import React from "react";
import jaelogo from "../../public/images/JaehubLogo.png"

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="container footer-top">

          <div className="footer-column">
            <div className="footer-logo">
              <img src={jaelogo} alt="JaehubLogo" />
            </div>
            <p>JAE Hub is a trusted IT solutions provider with over 15 years of expertise in web development and digital innovation. We specialize in crafting high-performance e-commerce platforms, conversion-focused landing pages, ecommerce , robust point-of-sale systems and cloud services. </p>

            <div className="footer-contact">
              <p><i className="fas fa-phone-alt"></i> +63-956-150-9151</p>
              <p><i className="fas fa-phone-alt"></i> 046-884-4341</p>
            </div>
            <div className="footer-contact">
              <p><i className="fas fa-map-marker-alt"></i> Unit 1015 Winland Tower Tomas Morato<br />  Kristong Hari Quezon City 1101</p>
            </div>
          </div>

          <div className="footer-column">
            <h5>Useful Links</h5>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Portfolio</a></li>
              <li><a href="#">Our Team</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">FAQ</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h5>Pages</h5>
            <ul>
              <li><a href="#">Error 404</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Service Details</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h5>Subscribe</h5>
            <p>There are many variations of passages of Lorem Ipsum available</p>
            <form className="subscribe-form">
              <input type="email" placeholder="Email Address" required />
              <button type="submit">Send</button>
            </form>
          </div>

        </div>
        <div className="footer-bottom">
          Copyright © 2025{" "}
          <a
            href="https://jaehubservices.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600"
          >
            Jae Hub
          </a>
        </div>
      </footer>
    </>
  );
}
