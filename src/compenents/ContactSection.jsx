import React from 'react';

function ContactSection() {
  return (
    <section id="contact" className="section">
      <div className="section-header">
        <h2><i className="fas fa-paper-plane"></i> Get In Touch</h2>
        <div className="section-line"></div>
      </div>
      <div className="contact-container">
        <ContactInfo />
        <ContactForm />
      </div>
    </section>
  );
}

function ContactInfo() {
  return (
    <div className="contact-info">
      <div className="contact-item">
        <i className="fas fa-envelope"></i>
        <div className="contact-details">
          <h3>Email</h3>
          <p>soufianemouta4@gmail.com</p>
          <p>soufiane-dev@outlook.com</p>
        </div>
      </div>
      <div className="contact-item">
        <i className="fas fa-map-marker-alt"></i>
        <div className="contact-details">
          <h3>Location</h3>
          <p>Morocco</p>
        </div>
      </div>
      <div className="contact-item">
        <i className="fas fa-phone"></i>
        <div className="contact-details">
          <h3>Phone</h3>
          <p>+212 621820506</p>
        </div>
      </div>
    </div>
  );
}

function ContactForm() {
  return (
    <form id="contact-form" className="contact-form">
      <div className="form-group">
        <div className="input-icon">
          <i className="fas fa-user"></i>
          <input type="text" placeholder="Your Name" required />
        </div>
      </div>
      <div className="form-group">
        <div className="input-icon">
          <i className="fas fa-envelope"></i>
          <input type="email" placeholder="Your Email" required />
        </div>
      </div>
      <div className="form-group">
        <div className="input-icon">
          <i className="fas fa-pencil-alt"></i>
          <textarea placeholder="Your Message" required></textarea>
        </div>
      </div>
      <button type="submit" className="btn primary">
        <i className="fas fa-paper-plane"></i>
        Send Message
      </button>
    </form>
  );
}

export default ContactSection;