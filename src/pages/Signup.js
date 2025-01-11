import React, { useState } from 'react';
import { auth, provider, signInWithPopup } from '../firebase';
import { useNavigate } from 'react-router-dom';
import './Signup.css';

const Signup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const validateInput = () => {
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setError('Please enter a valid email address.');
      return false;
    }
    if (!password || password.length < 6) {
      setError('Password must be at least 6 characters long.');
      return false;
    }
    setError('');
    return true;
  };

  const handleManualSignup = async () => {
    if (!validateInput()) return;

    try {
      const response = await fetch('http://localhost:5000/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (response.ok) {
        alert('Signup successful!');
        navigate('/login');
      } else {
        alert(data.message || 'Signup failed. Please try again.');
      }
    } catch (error) {
      console.error('Signup error:', error);
      alert('An error occurred. Please try again.');
    }
  };

  const handleGoogleSignup = async () => {
    try {
      await signInWithPopup(auth, provider); // Removed unused variable
      navigate('/resume');
    } catch (error) {
      console.error('Google signup failed', error);
      alert('Signup failed. Please try again.');
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <h1>Join Us Today!</h1>
        <input
          type="email"
          placeholder="Enter your email ID"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="signup-input"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="signup-input"
        />
        {error && <p className="error-text">{error}</p>}
        <button className="button-primary" onClick={handleManualSignup}>
          Sign Up
        </button>
        <p>or</p>
        <button className="button-primary" onClick={handleGoogleSignup}>
          <img
            src="/images/download.jpg"
            alt="Google logo"
            className="google-logo"
          />
          Sign up with Google
        </button>
      </div>
    </div>
  );
};

export default Signup;
