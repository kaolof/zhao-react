import React from "react";
import Logo from "../assets/logo_footer.svg";
import WhatsImg from "../assets/icons/rrss/whatsapp.png";
import InstaImg from "../assets/icons/rrss/instagram.png";
import TelImg from "../assets/icons/rrss/telefono.png";

export const Footer = (props) => {
  return (
    <footer>
      <div class="footer-items">
        <div class="footer-item footer-logo">
          <img src={Logo} alt="zhao logo"/>
        </div>
        <div class="footer-item">
          <ul class="footer-menu">
            <li><a href="">WHAT WE DO</a></li>
            <li><a href="">SERVICES</a></li>
            <li><a href="">ABOUT</a></li>
            <li><a href="">CONTACT US</a></li>
          </ul>
        </div>
        <div class="footer-item">
          <ul class="footer-menu-social">
            <li>
              <a href="https://wa.link/o0r67x" target="_blank">
                <img src={WhatsImg} alt="whatsapp"/>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/zhaostaff/" target="_blank">
                <img src={InstaImg} alt="instagram"/>
              </a>
              </li>
            <li>
              <a href="tel:+17865852690">
                <img src={TelImg} alt="telefono"/>
              </a>
            </li>         
          </ul>
          <div class="footer-contact">
            <p>info@uszhao.com</p>
            <p>786-585-2690</p>
          </div>
        </div>
      </div>
      <div class="copyright">
        <p> Terms & Conditions | Privacy Policy | © 2024 All rights reserved</p>
      </div>
    </footer>
  );
};
