import React from 'react';
import { FaUserCircle } from 'react-icons/fa';

function AboutSection() {
  return (
    <section id="about" className="section">
      <div className="section-header">
                <h2><i><FaUserCircle /></i> About Me</h2>
                <div className="section-line"></div>
       </div>
      <div className="about-content">
        <div className="about-text">
          <p>I'm a passionate Full Stack Developer with expertise in building modern web applications. With a strong foundation in both front-end and back-end development, I create seamless digital experiences that combine beautiful design with powerful functionality.</p>
        </div>
        <div className="info-grid">
          <div className="info-card">
            <i className="fas fa-laptop-code"></i>
            <h3>Web Development</h3>
            <p>Creating responsive and dynamic web applications using modern frameworks and technologies.</p>
          </div>
          <div className="info-card">
            <i className="fas fa-mobile-alt"></i>
            <h3>Mobile Development</h3>
            <p>Building cross-platform mobile applications with React Native and Flutter.</p>
          </div>
          <div className="info-card">
            <i className="fas fa-server"></i>
            <h3>Backend Solutions</h3>
            <p>Developing robust server-side applications and RESTful APIs.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;