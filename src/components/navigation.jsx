import React, { useEffect, useRef } from "react";
import logo from '../assets/logo.svg';
import burgerIcon from '../assets/icons/burguer_menu.svg';
import '../styles/style.css';

export const Navigation = (props) => {
  // Crear referencias para los elementos del DOM
  const menuToggleRef = useRef(null);
  const mobileMenuRef = useRef(null);

  useEffect(() => {
    const menuToggle = menuToggleRef.current;
    const mobileMenu = mobileMenuRef.current;

    const handleMenuToggle = () => {
      if (mobileMenu.style.display === 'block') {
        mobileMenu.style.display = 'none';
      } else {
        mobileMenu.style.display = 'block';
      }
    };

    // Añadir el event listener
    menuToggle.addEventListener('click', handleMenuToggle);

    // Limpiar el event listener cuando el componente se desmonta
    return () => {
      menuToggle.removeEventListener('click', handleMenuToggle);
    };
  }, []); // El array vacío asegura que este efecto se ejecute solo una vez cuando el componente se monta

  return (
    <nav id="navbar">
      <div id="logo">
        <img src={logo} alt="Logo" />
        <span>Zhao</span>
      </div>
      <div>
        <div id="menu-toggle" ref={menuToggleRef}>
          <img src={burgerIcon} alt="burguer menu icon" />
        </div>
        <ul id="mobile-menu" ref={mobileMenuRef} style={{ display: 'none' }}>
          <li><a href="#about_us">About us</a></li>
          <li><a href="#your_events">What we do</a></li>
          <li><a href="#we_offer">Services</a></li>
          <li><a href="#contact">Contact Us</a></li>
        </ul>
        <ul id="desktop-menu">
          <li><a className="text-white" href="#about_us">About us</a></li>
          <li><a className="text-white" href="#your_events">What we do</a></li>
          <li><a className="text-white" href="#we_offer">Services</a></li>
          <li><a className="btn primary" href="#contact">Contact Us</a></li>
        </ul>
      </div>
    </nav>
  );
};