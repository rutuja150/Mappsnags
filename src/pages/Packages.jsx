import React from "react";
import Navbar from "../components/Navbar";
import "./Packages.css";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";

import bgImage from "../assets/packages-bg.jpg"; // replace with your filename


export default function Packages() {
  return (
    <div className="packages-page">
      <Navbar />

      <section
  className="crafted-hero"
  style={{ backgroundImage: `url(${bgImage})` }}
>
  <div className="crafted-overlay">
    <h1>Your Travel, Crafted With Care</h1>
    <p>We don't do packages. We craft personal journeys.</p>
  </div>
</section>


     <section className="how-it-works animate-up">
  <h2 className="how-title">How It Works – From Dream to Departure</h2>

  <div className="steps-container">
    <div className="step-card">
      <h3>Step 1: Share Your Travel Story</h3>
      <p>You tell us your vibe — adventure or leisure, cities or nature, group or solo — and your budget. We understand your preferences and start sketching your journey.</p>
    </div>

    <div className="step-card">
      <h3>Step 2: Get Your Custom Travel Plan <span className="free-tag">Free</span></h3>
      <ul>
        <li>Suggested travel route & destinations</li>
        <li>Sample stays and experiences</li>
        <li>Estimated cost with clear inclusions & exclusions</li>
      </ul>
      <p className="no-pressure">No pressure to book. Just an honest plan made with love.</p>
    </div>

    <div className="step-card">
      <h3>Step 3: You Approve, We Book — Together</h3>
      <ul>
        <li>We book flights, hotels, experiences — only after you confirm</li>
        <li>Multiple hotel options to choose from</li>
        <li>Your preferences included — not just ours</li>
      </ul>
    </div>

    <div className="step-card">
      <h3>Step 4: The Itinerary Magic Begins</h3>
      <ul>
        <li>📅 Day-wise planner with timing</li>
        <li>📍 Google Maps for easy navigation</li>
        <li>🍽️ Food & café suggestions</li>
        <li>🚖 Rentals, docs, packing tips, and hidden gems</li>
      </ul>
    </div>

    <div className="step-card">
      <h3>Step 5: During Your Trip – We’re With You Always</h3>
      <ul>
        <li>24x7 WhatsApp Support</li>
        <li>Help with rescheduling, rebooking</li>
        <li>Real-time support from real people</li>
      </ul>
    </div>
  </div>
</section>


     <section className="why-maps-bags animate-up">
  <h2>Why Maps & Bags?</h2>
  <ul className="features-list">
    <li>✅ Every trip is tailor-made — no reused templates</li>
    <li>🧠 Built from scratch with your preferences</li>
    <li>📍 Real travel insights — beyond just touristy places</li>
    <li>💬 Real conversations — no bots or call centers</li>
    <li>💛 We plan like it's our own trip</li>
  </ul>

  
</section>

 
    

     
      {/* CTA Section */}
   <section className="whatsapp-cta">
  <h3>Want to See What Your Trip Could Look Like?</h3>

  <div className="cta-buttons">
    <a
      href="https://wa.me/918668819968?text=Hi%20Maps%20%26%20Bags!%20I%20would%20like%20to%20plan%20a%20trip.%20Can%20you%20guide%20me%20through%20the%20itinerary%20process?"
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-btn"
    >
      <FaWhatsapp size={20} style={{ marginRight: "8px" }} />
      Connect with us on WhatsApp
    </a>

    <a
      href="https://www.instagram.com/maps__n__bags"
      target="_blank"
      rel="noopener noreferrer"
      className="instagram-btn"
    >
      <FaInstagram size={20} style={{ marginRight: "8px" }} />
      DM us on Instagram
    </a>
  </div>
</section>

    </div>
  );
}
