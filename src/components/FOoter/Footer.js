import React from 'react';
import './Footer.css';
import { FaFacebook, FaInstagram, FaWhatsapp, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer-text">Designed and developed by Anugya Shrivastava</p>
      <div className="footer-icons">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook className="footer-icon" />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="footer-icon" />
        </a>
        <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp className="footer-icon" />
        </a>
        <a href="https://www.linkedin.com/in/anugya-shrivastava-78ab442a4/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="footer-icon" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
