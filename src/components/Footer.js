// src/components/Footer.js

import React from 'react';
import './Footer.css';

const Footer = () => {
  // Obtenemos el año actual de forma dinámica
  const currentYear = new Date().getFullYear();

  return (
    <footer className="app-footer">
      <p>
        © {currentYear} Alberto Bort | Made with      <span className="heart">♥</span>
      </p>
    </footer>
  );
};

export default Footer;