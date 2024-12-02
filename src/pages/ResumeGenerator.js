import React from 'react';
import { Link } from 'react-router-dom';
import './ResumeGenerator.css'; // Importing the CSS correctly

const ResumeGenerator = () => {
  return (
    <div className="resume-generator-container">
      <h2>Choose a Template to Generate Your Resume</h2>
      <div className="template-boxes">
        <div className="template-box">
          <h3>Template 1</h3>
          <img 
            src="/images/image6.jpg" 
            alt="Template 1 Preview" 
            className="template-image"
          />
          <Link to="/template1" className="generate-btn">Generate Resume</Link>
        </div>
        <div className="template-box">
          <h3>Template 2</h3>
          <img 
            src="/images/image5.jpg" 
            alt="Template 2 Preview" 
            className="template-image"
          />
          <Link to="/template2" className="generate-btn">Edit Template</Link>
        </div>
        <div className="template-box">
          <h3>Template 3</h3>
          <img 
            src="/images/image9.jpg" 
            alt="Template 3 Preview" 
            className="template-image"
          />
          <Link to="/template3" className="generate-btn">Choose Template</Link>
        </div>
      </div>
    </div>
  );
};

export default ResumeGenerator;
