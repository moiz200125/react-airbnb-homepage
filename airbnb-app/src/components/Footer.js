import React from "react";
import "./Footer.css"; // You'll add the styles here

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-sections">
        <div className="footer-column">
          <h3>Support</h3>
          <ul>
            <li><a href="#">Help Center</a></li>
            <li><a href="#">AirCover</a></li>
            <li><a href="#">Anti-discrimination</a></li>
            <li><a href="#">Disability support</a></li>
            <li><a href="#">Cancellation options</a></li>
            <li><a href="#">Report neighborhood concern</a></li>
          </ul>
        </div>
        
        <div className="footer-column">
          <h3>Hosting</h3>
          <ul>
            <li><a href="#">Airbnb your home</a></li>
            <li><a href="#">AirCover for Hosts</a></li>
            <li><a href="#">Hosting resources</a></li>
            <li><a href="#">Community forum</a></li>
            <li><a href="#">Hosting responsibly</a></li>
            <li><a href="#">Airbnb-friendly apartments</a></li>
            <li><a href="#">Join a free Hosting class</a></li>
          </ul>
        </div>
        
        <div className="footer-column">
          <h3>Airbnb</h3>
          <ul>
            <li><a href="#">Newsroom</a></li>
            <li><a href="#">New features</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Investors</a></li>
            <li><a href="#">Gift cards</a></li>
            <li><a href="#">Airbnb.org emergency stays</a></li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>© 2024 Airbnb, Inc.</p>
        <ul className="footer-links">
          <li><a href="#">Terms</a></li>
          <li><a href="#">Sitemap</a></li>
          <li><a href="#">Privacy</a></li>
          <li><a href="#">Your Privacy Choices</a></li>
        </ul>
        <div className="footer-social">
          <span>English (US)</span>
          <span>$ USD</span>
          <a href="#"><i className="fab fa-facebook"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
