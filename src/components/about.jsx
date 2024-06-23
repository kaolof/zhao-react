import React from "react";
import AboutImg from '../assets/images/about_us.jpg';
import '../styles/style.css';

export const About = (props) => {
  return (
    <section id="about_us">
      <div className="section-img-container">
        <img id="about_us-img" src={AboutImg} alt="staff img" />
      </div>

      <div className="section-content">
        <span className="subtitle">About us</span>
        <h2>We're not your typical staffing agency</h2>
        <p>
          At ZHAO Agency, we specialize in full-service event production staffing. Since 2020, we’ve been all in on making events shine,
          from setup to candles out.
          <br />
          <br />
          We manage the tough stuff! enjoy a stress-free event journey we're here for you, anywhere in America.
        </p>

        <a className="btn purple" href="#we_offer">Learn more</a>
      </div>
    </section>
  );
};
