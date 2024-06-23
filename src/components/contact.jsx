import React from "react";
import ContactImg from "../assets/images/contact.jpg";

export const Contact = (props) => {
  return (
  <section id="contact">
    <div class="section-img-container">
      <img id="contact-img" src={ContactImg} alt="contact img" />
    </div>
    <div class="section-content">
      <span class="subtitle-2">Got an upcoming event and need a team? Look no further than <span>ZHAO</span>.</span>
      <h2>REQUEST A QUOTE</h2>
      
        <form class="contact-form" action="https://formspree.io/f/xayrzwyw" method="POST">
          <div class="form-group">
            <input class="input-name" type="text" id="name" name="name" placeholder="Name" required />
          </div>
          <div class="form-group">
            <input class="input-name" type="text" id="last-name" name="last-name" placeholder="Last name" required />
          </div>
          <div class="form-group">
            <input type="email" id="email" name="email" placeholder="Email" required />
          </div>
          <div class="form-group">
            <select id="looking-for" name="looking-for"placeholder="Looking for" required>
              <option value="option">Looking for</option>
              <option value="option1">**Production Crew Solutions**</option>
              <option value="option2">*Production Lead and Crew*</option>
              <option value="option3">**Florist Services**</option>
              <option value="option3">**Driver Services**</option>
              <option value="option3">**Warehouse Support**</option>
              <option value="option3">**Logistical Support*</option>
            </select>
          </div>
          <div class="form-group">
            <textarea id="message" name="message" rows="8" placeholder="Write your message here" required></textarea>
          </div>
          <button class="btn submit" type="submit">Send</button>
        </form>
        
    </div>
  </section>
  );
};
