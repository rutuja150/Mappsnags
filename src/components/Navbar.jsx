import React, { useState } from "react";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import logo from "../assets/logo.png";
import "./Navbar.css";

const Navbar = () => {
  const [isLogoExpanded, setIsLogoExpanded] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <header className="navbar">
      <div
        className={`navbar-logo ${isLogoExpanded ? "expanded" : ""}`}
        onClick={() => setIsLogoExpanded(!isLogoExpanded)}
      >
        <img src={logo} alt="Maps and Bags Logo" />
        <div className="logo-text">
          <span className="brand-name">Maps & Bags</span>
          <span className="brand-tagline">Our itinerary, your way</span>
        </div>
      </div>

      <nav className="nav-links">
        <a href="/" className="nav-link">Home</a>
        

        <div
          className="nav-dropdown"
          onMouseEnter={() => setIsContactOpen(true)}
          onMouseLeave={() => setIsContactOpen(false)}
        >
          <span className="nav-link">Contact</span>
          {isContactOpen && (
  <div className="dropdown-content">
    <strong>Sonali Jaju</strong>
    <a
      href="https://wa.me/918668819968?text=Hi%20Sonali%20Jaju%2C%20I%20am%20interested%20in%20planning%20a%20trip%20with%20Maps%20%26%20Bags!"
      target="_blank"
      rel="noreferrer"
      className="contact-link"
    >
      <FaWhatsapp style={{ color: "#25D366", marginRight: "6px" }} />
      WhatsApp
    </a>
    <a href="tel:+918668819968" className="contact-link">
      <FaPhoneAlt style={{ color: "#007bff", marginRight: "6px" }} />
      Call
    </a>
  </div>
)}

        </div>
        <a href="/packages" className="nav-link">Services</a>
        <a href="/about" className="nav-link">About</a>
      </nav>
    </header>
  );
};

export default Navbar;
