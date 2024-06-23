import React from "react";
import OurGoalImg from '../assets/images/our_goal.jpg';
import '../styles/style.css';

export const OurGoal = (props) => {
  return (
    <section id="your_events">
      <div class="section-img-container">
        <img id="our_goal-img" src={OurGoalImg} alt="staff img" />
      </div>
      <div class="section-content">
        <span class="subtitle">Our Goal</span>
        <h2>Your Event Specialists</h2>
        <p>
          Behind every spectacular event are dedicated specialists working hard to create that 'wow' effect we all love.
          <strong
            >Our staff will join forces with your team, providing the extra hands that we know make a big difference in a production</strong
          >. Here are some of our services
        </p>
        <a class="btn purple" href="#we_offer">Learn more</a>
      </div>
    </section>
  );
};
