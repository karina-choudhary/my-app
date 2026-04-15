// src/Componets/Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-3 mt-auto">
      <p className="mb-0">&copy; {new Date().getFullYear()} MyCabApp — All rights reserved.</p>
    </footer>
  );
};

export default Footer;

