import React from "react";
import video from '../assets/video/zhao_video.mp4';
import '../styles/style.css'

export const Header = (props) => {
  return (
    <header id="header">
    <video autoPlay muted loop id="video-bg">
      <source src={video} type="video/mp4" />
    </video>
    <div className="header-overlay"></div>
    <div className="header-content">
      <h1>Next-level <span>Event Staffing Solutions</span></h1>
      <a className="btn secondary" href="#we_offer">Let's dive in</a>
    </div>
    <div id="stats">
      <ul>
        <li>245<span>Events</span></li>
        <li>545<span>Professionals</span></li>
        <li>13<span>states</span></li>
      </ul>
    </div>
  </header>
  );
};
