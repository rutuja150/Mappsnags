import React from "react";
import Navbar from "../components/Navbar";
import "./About.css";
import foundersImg from "../assets/founders.jpg";      // Right side image
import founderBg from "../assets/founders-bg.jpg";      // Top full-width image

const About = () => {
  return (
    <div className="about-container">
      <Navbar />

      {/* Top Full Image */}
      <section className="top-banner">
        <img src={founderBg} alt="Founders Cover" />
      </section>

      {/* Text + Right Side Image */}
      <section className="intro-section">
  <div className="intro-text">
    <h2>We’re Sonali & Akash, co-founders of Maps N Bags and co-travelers in life</h2>
    <p>
      We’re Sonali & Akash, co-founders of Maps N Bags and co-travelers in life.
      Ties started by helping friends and family plan their getaway — and soon realized
      there was a growing need for thoughtful, customized travel planning that goes
      beyond generic packages.
    </p>
  </div>

  <div className="intro-img">
    <img src={foundersImg} alt="Sonali and Akash" />
    <p className="italic-quote">To craft journeys that feel like you.</p>
  </div>
</section>


      {/* What Makes Us Different */}
      <section className="difference-section">
        <h3>WHAT MAKES US DIFFERENT</h3>
        <div className="difference-cards">
          <div className="card">
            ✈️
            <h4>HANDCRAFTED ITINERARIES</h4>
          </div>
          <div className="card">
            🤝
            <h4>PERSONAL SUPPORT, ALWAYS</h4>
          </div>
          <div className="card">
            🧭
            <h4>NO TEMPLATES, JUST TRAVEL THAT FEELS RIGHT</h4>
          </div>
        </div>
      </section>

      {/* Story + Testimonial Side-by-Side */}
      <section className="story-testimonial-section">
        <div className="story-box">
          <p className="story-text">
            <em>
              Since launching, we’ve had the joy of curating dozens of meaningful trips —
              from honeymooners chasing the Northern Lights to families in the charm of slow
              travel across Sri Lanka, Turkey, Romania, Ladakh, and beyond.
            </em>
          </p>
        </div>

        <div className="testimonial-box">
          <p className="stars">★★★★★</p>
          <p>
            Our second trip with Maps N Bags was just as amazing as the first! Every detail — from planning to local tips — was perfectly handled. Highly recommended!
          </p>
          <p className="author">— <strong>Tanvi Mehta</strong></p>
        </div>
      </section>
    </div>
  );
};

export default About;
