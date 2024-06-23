import React from "react";

export const About = (props) => {
  return (
    <section id="about_us">
      <div class="section-img-container">
        <img id="about_us-img" src="./assets/images/about_us.jpg" alt="staff img" />
      </div>

      <div class="section-content">
        <span class="subtitle">About us</span>
        <h2>We're not your typical staffing agency</h2>
        <p>
          At ZHAO Agency, we specialize in full-service event production staffing. Since 2020, we’ve been all in on making events shine,
          from setup to candles out.
          <br />
          <br />
          We manage the tough stuff! enjoy a stress-free event journey we're here for you, anywhere in America.
        </p>

        <a class="btn purple" href="#we_offer">Learn more</a>
      </div>
    </section>
  );
};
