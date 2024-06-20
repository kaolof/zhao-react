import React from "react";

export const Navigation = (props) => {
  const {logo} = props.data;
  return (
    <nav id="navbar">
    <div id="logo">
      <img src={logo} alt="Logo" />
      <span>Zhao</span>
    </div>
    <div>
      <div id="menu-toggle">
        <img src="" alt="burguer menu icon" />
      </div>
      <ul id="mobile-menu">
        <li><a href="#about_us">About us</a></li>
        <li><a href="#your_events">What we do</a></li>
        <li><a href="#we_offer">Services</a></li>
        <li><a href="#contact">Contact Us</a></li>
      </ul>
      <ul id="desktop-menu">
        <li><a class="text-white" href="#about_us">About us</a></li>
        <li><a class="text-white" href="#your_events">What we do</a></li>
        <li><a class="text-white" href="#we_offer">Services</a></li>
        <li><a class="btn primary" href="#contact">Contact Us</a></li>
      </ul>
    </div>
  </nav>
    /* <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <a className="navbar-brand page-scroll" href="#page-top">
            React Landing Page
          </a>{" "}
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#features" className="page-scroll">
                Features
              </a>
            </li>
            <li>
              <a href="#about" className="page-scroll">
                About
              </a>
            </li>
            <li>
              <a href="#services" className="page-scroll">
                Services
              </a>
            </li>
            <li>
              <a href="#portfolio" className="page-scroll">
                Gallery
              </a>
            </li>
            <li>
              <a href="#testimonials" className="page-scroll">
                Testimonials
              </a>
            </li>
            <li>
              <a href="#team" className="page-scroll">
                Team
              </a>
            </li>
            <li>
              <a href="#contact" className="page-scroll">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav> */
  );
};
