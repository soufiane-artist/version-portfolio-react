import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

function Fotter() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>2024 Soufiane Moutaouakil. All rights reserved.</p>
        <div className="footer-social">
          <a href="#"><FaGithub /></a>
          <a href="#"><FaLinkedin /></a>
          <a href="#"><FaTwitter /></a>
        </div>
      </div>
    </footer>
  );
}

export default Fotter;