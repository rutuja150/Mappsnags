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
      Maps N Bags was born from a shared love for travel and storytelling between Sonali and Akash — two explorers who believe that meaningful travel can change the way we see the world, and ourselves. What began as a passion project soon took the shape of a purpose: to help others experience the same joy of discovering places beyond the ordinary.

Over time, this evolved into a boutique travel design studio that doesn’t just plan trips — it curates deeply personal, thoughtfully paced journeys crafted entirely around you. From the kind of stays you love to the vibe you’re looking for, every detail is handpicked with care.

With every itinerary they designed — whether for friends, family, or clients — one thing became clear: no two travelers are alike. That’s why at Maps N Bags, the heart of everything lies in one simple promise: <strong>We don’t offer packages — we offer thoughtfully designed journeys, tailored to your story.</strong>
    </p>
  </div>

  <div className="intro-img">
    <img src={foundersImg} alt="Sonali and Akash" />
    <p className="italic-quote">To craft journeys that feel like you.</p>
  </div>
</section>


      {/* Our Vision */}
<section className="vision-section">
  <h3>Our Vision</h3>
  <p className="vision-text">
    To redefine the way people travel — moving away from mass-produced itineraries and toward journeys that are personal, meaningful, and rooted in storytelling.
  </p>
  <p className="vision-text">
    We believe travel is not about how many places you’ve been, but how deeply you’ve experienced them. At Maps N Bags, our vision is to create a space where every trip reflects the traveler — their rhythm, their preferences, and their idea of joy.
  </p>
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
