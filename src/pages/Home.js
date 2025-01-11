import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();

  // Function to navigate to the Resume Generate page
  const handleGetStarted = () => {
    navigate('/resume'); // Redirect to Resume Generate page
  };

  return (
    <div className="home-container">
      {/* Welcome message section */}
      <div className="welcome-message">
        <h1>Build a Resume that Gets You Noticed</h1>
        <p>
          Create a stunning, professional resume with ease using our intuitive platform.
          Stand out and get noticed by employers in minutes.
        </p>
        <button className="cta-button" onClick={handleGetStarted}>
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Home;
