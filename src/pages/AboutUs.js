// src/pages/AboutUs.js
import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <div className="about-us-card">
        <div className="photo-container">
          <img src="/images/photo1.jpg" alt="Kunj Khanpara" className="profile-photo" />
        </div>
        <div className="content-container">
          <h1>Kunj Khanpara</h1>
          <p className="profile-description">
            Hi, I’m Kunj Khanpara, a final-year B.Tech Computer Engineering student passionate about building creative and efficient 
            software solutions. I specialize in web development and have hands-on experience working with modern tools like ReactJS 
            and JavaScript. Whether it's crafting intuitive interfaces or solving challenging coding problems, I strive to deliver 
            impactful results in every project.
          </p>
          <div className="contact-links">
            <a href="tel:+919925424344" className="contact-link">📞 +91 9925424344</a>
            <a href="mailto:kunjpatel4647@gmail.com" className="contact-link">✉️ kunjpatel4647@gmail.com</a>
            <a href="https://github.com/kunjkhanpara" target="_blank" rel="noopener noreferrer" className="contact-link">
              GitHub Profile
            </a>
            <a href="https://linkedin.com/in/kunj-khanpara" target="_blank" rel="noopener noreferrer" className="contact-link">
              LinkedIn Profile
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
