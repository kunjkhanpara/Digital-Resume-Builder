// src/components/Navbar.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import './Navbar.css';  // Importing the CSS file

const Navbar = ({ user, setUser }) => {
  const navigate = useNavigate();
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const handleLogout = async () => {
    try {
      await auth.signOut();
      setUser(null);
      navigate('/');
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/resume">Resume Generate</Link>
      </div>
      <div className="navbar-profile">
        {user ? (
          <div className="profile-info">
            <img
              src={user.photoURL || "default-avatar.png"}  // Fallback to default image if photoURL is not available
              alt="Profile"
              className="profile-photo"
              onClick={() => setDropdownVisible(!dropdownVisible)}
            />
            {dropdownVisible && (
              <div className="profile-dropdown">
                <p>{user.displayName}</p>
                <p>{user.email}</p>
                <button onClick={handleLogout}>Logout</button>
              </div>
            )}
          </div>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
