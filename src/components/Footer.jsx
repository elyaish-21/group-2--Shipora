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
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry has been the industry.</p>

              <div className="footer-contact">
                <p><i className="fas fa-phone-alt"></i> +01 123 456 7890</p>
                <p><i className="fas fa-phone-alt"></i> +01 123 456 7890</p>
              </div>
              <div className="footer-contact">
                <p><i className="fas fa-map-marker-alt"></i> 2005 Stokes Isle Apt. 896,<br /> Venaville 10010, USA</p>
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
            Copyright © 2025 Jaehub 
          </div>
        </footer>
      </>
  );
}
