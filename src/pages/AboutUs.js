// src/pages/AboutUs.js
import React from 'react';
import './AboutUs.css';  // Make sure to import the CSS

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <h1>Meet Our Team</h1>
      <div className="team-container">
        {/* Team Member 1 */}
        <div className="team-member">
          <img src="/images/photo1.jpg" alt="Kunj Khanpara" className="team-photo" />
          <h3>Kunj Khanpara</h3>
          <p>Founder & CEO</p>
          <p>Leading the team with vision and dedication, Kunj is passionate about helping individuals build successful resumes.</p>
          <p><strong>Phone:</strong> +91 9925424344</p>
          <p><strong>Email:</strong> kunjpatel4647@gmail.com</p>
        </div>

        {/* Team Member 2 */}
        <div className="team-member">
          <img src="/images/photo2.jpg" alt="Raj Padaliya" className="team-photo" />
          <h3>Raj Padaliya</h3>
          <p>Product Manager</p>
          <p>Raj oversees the development of the resume-building tool, ensuring it meets the needs of our users.</p>
          <p><strong>Phone:</strong> +91 9876543210</p>
          <p><strong>Email:</strong> rajpadaliya@example.com</p>
        </div>

        {/* Team Member 3 */}
        <div className="team-member">
          <img src="/images/photo3.jpg" alt="Dharmik Tarapada" className="team-photo" />
          <h3>Dharmik Tarapada</h3>
          <p>Lead Developer</p>
          <p>Dharmik is responsible for the technical development of the platform, ensuring it runs smoothly and efficiently.</p>
          <p><strong>Phone:</strong> +91 9988776655</p>
          <p><strong>Email:</strong> dharmik@example.com</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
