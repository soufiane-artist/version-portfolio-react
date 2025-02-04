import React from 'react';
import { FaReact, FaNodeJs, FaJs, FaVuejs, FaPlug, FaDatabase, 
         FaGithub, FaLinkedin, FaTwitter, FaEye, FaPaperPlane } from 'react-icons/fa';

function HomeSection() {
  return (
    <section id="home" className="section">
      <div className="hero-content">
        <div className="profile-container">
          <img src="./profile img.png" 
               data-src="./profile img.png" 
               alt="Soufiane Moutaouakil" 
               className="profile-img lazy" 
               loading="lazy" 
               width="200" 
               height="200" 
               decoding="async" />
          <div className="profile-circle"></div>
        </div>
        <h1>
          <span>S</span><span>o</span><span>u</span><span>f</span><span>i</span><span>a</span><span>n</span><span>e</span>
          <span> </span>
          <span>M</span><span>o</span><span>u</span><span>t</span><span>a</span><span>o</span><span>u</span><span>a</span><span>k</span><span>i</span><span>l</span>
        </h1>
        <h2>Full Stack Developer</h2>
        <p className="tagline">Crafting Digital Experiences with Modern Technologies</p>
        <div className="tech-stack">
        <i> <FaReact title="React" /></i>
        <i>
           <FaNodeJs title="Node.js" /> 
        </i>
        <i> <FaJs title="JavaScript" /></i> 
          <i><FaVuejs title="Vue.js" /> </i>
          <i><FaPlug title="Socket.IO" /> </i>
          <i><FaDatabase title="Mongoose (MongoDB)" /> </i>
        </div>
        <div className="social-links">
          <a href="#" target="_blank" className="social-icon">
           <FaGithub />
            <span className="tooltip">GitHub</span>
          </a>
          <a href="#" target="_blank" className="social-icon">
            <FaLinkedin />
            <span className="tooltip">LinkedIn</span>
          </a>
          <a href="#" target="_blank" className="social-icon">
            <FaTwitter />
            <span className="tooltip">Twitter</span>
          </a>
        </div>
        <div className="cta-buttons">
          <a href="#projects" className="btn primary">
           <FaEye />
            View Projects
          </a>
          <a href="#contact" className="btn secondary">
            <FaPaperPlane />
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}

export default HomeSection;