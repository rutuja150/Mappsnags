import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import "./Home.css";
import logo from "../assets/logo.png";
import hero from "../assets/hero.jpg";
import trip1 from "../assets/trip1.jpg"; // Vietnam
import trip2 from "../assets/trip2.jpg"; // Paris
import trip3 from "../assets/trip3.jpg"; // Kashmir
// import Vietnam from "../assets/Vietnam.webp";
// import Paris from "../assets/Paris.webp";
// import Kashmir from "../assets/Kashmir.webp";
import { FaWhatsapp, FaPhoneAlt, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Home() {
  const [googleRating, setGoogleRating] = useState(null);
  const [highlightReview, setHighlightReview] = useState("");
  const [isLogoExpanded, setIsLogoExpanded] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  const sampleReviews = [
    "The experience was beyond amazing! – Ria",
    "Perfectly planned itinerary and budget friendly! – Aman",
    "We had zero worries, thanks to Maps & Bags. – Neha",
  ];

  useEffect(() => {
    setGoogleRating(5.0);
    const today = new Date().getDate();
    const index = today % sampleReviews.length;
    setHighlightReview(sampleReviews[index]);
  }, []);

  return (
    <div className="home-wrapper">
      {/* Navigation */}
      <Navbar />

      <section className="hero">
  <img src={hero} alt="Hero" className="hero-image" />
  <div className="hero-text">
    <h1>Our Itinerary , Your Way.....</h1>
    <p>Explore the world with customized travel packages</p>
  </div>
</section>


      {/* Google Rating */}
      <section className="google-rating">
        <h2>Google Rating</h2>
        <p>{googleRating ? `⭐ ${googleRating}/5 on Google` : "Loading..."}</p>
      </section>

      {/* What We Offer */}
      <section className="what-we-offer">
        <h2>What We Offer</h2>
        <div className="offer-icons">
          <div><span>✈️</span><p>Custom Itinerary Planning</p></div>
          <div><span>💼</span><p>Honeymoons & Romantic Getaways</p></div>
          <div><span>👨‍👩‍👧‍👦</span><p>Family & Nature Escapes</p></div>
          <div><span>🎁</span><p>Surprise Add-ons & Personal Touches</p></div>
        </div>
      </section>


      {/* Featured Experiences */}
<section className="featured-experiences-section">
  <h2>Featured Experiences</h2>
  <p className="subheading">A glimpse of real journeys we’ve handcrafted.</p>
  <div className="experience-grid">
    <div className="experience-card">
      <div className="icon">❤️</div>
      <h3>Turkey Honeymoon Escape</h3>
      <p>Hot air balloons, cave stays & dreamy photoshoots</p>
    </div>
    <div className="experience-card">
      <div className="icon">❄️</div>
      <h3>Northern Lights in Iceland</h3>
      <p>Arctic stays, cosy cabins & aurora chases</p>
    </div>
    <div className="experience-card">
      <div className="icon">🌲</div>
      <h3>Kashmir Family Winter Trip</h3>
      <p>Snowy fun, birthday surprises & mountain memories</p>
    </div>
    <div className="experience-card">
      <div className="icon">🚗</div>
      <h3>Paris + Corsica Self-Drive Adventure</h3>
      <p>Offbeat France with freedom & flair</p>
    </div>
  </div>
  <p className="footer-note">
    ...and many more unforgettable journeys across the globe.
  </p>
</section>


      {/* Destinations */}
      <section className="destinations">
        <h2>Why Travelers Love Us</h2>
        <div className="cards">
          <div className="card">
            <img src={trip1} alt="Vietnam" />
            <h3>Rajan Dadkar</h3>
            <p><i>“Wonderful experience with Maps N Bags! Every detail — from accommodation to food and local support — was perfectly managed. Would definitely recommend them!”</i></p>
          </div>

          <div className="card">
            <img src={trip2} alt="Paris" />
            <h3>Abhijeet Karwa </h3>
            <p><i>“Our Paris–Corsica–Pyrenees trip was one of the best ever. Maps N Bags helped with everything — from offbeat stays to visa assistance. Truly seamless!”</i></p>
            </div>

          <div className="card">
            <img src={trip3} alt="Kashmir" />
            <h3>Abhinav Goyal</h3>
            <p><i>“We travelled to Kashmir with kids and it was magical. The planning, the stays, and even a surprise birthday celebration for our daughter — all unforgettable!”</i></p>
            
          </div>
        </div>
      </section>

      
      

     

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <p>© 2025 Maps & Bags</p>
          <div className="social-icons">
            <a
              href="https://www.instagram.com/maps__n__bags"
              target="_blank"
              rel="noopener noreferrer"
              className="instagram"
              aria-label="Instagram"
            >
              <FaInstagram size={34} />
            </a>
            <a
              href="https://www.linkedin.com/company/maps-n-bags/posts/?feedView=all"
              target="_blank"
              rel="noopener noreferrer"
              className="linkedin"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={34} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
