import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <div className="about-header">
        <h1>About Kunj Khanpara</h1>
      </div>
      <div className="profile-container">
        <div className="profile-card">
          <img src="/images/photo1.jpg" alt="Kunj Khanpara" className="profile-photo" />
          <h2>Kunj Khanpara</h2>
          <p className="title">Founder & CEO</p>
          <p>
            I'm dedicated to empowering individuals to create impactful resumes that unlock career
            opportunities. With a passion for innovation and excellence, I lead the development of
            cutting-edge resume-building tools tailored to your needs.
          </p>
          <div className="contact-info">
            <p><strong>Phone:</strong> +91 9925424344</p>
            <p><strong>Email:</strong> kunjpatel4647@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
