import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <img src="https://your-logo-url.com/logo.png" alt="Airbnb Logo" />
      </div>
      <div className="navbar__links">
        <a href="#home">Home</a>
        <a href="#experiences">Experiences</a>
        <a href="#online-experiences">Online Experiences</a>
      </div>
      <div className="navbar__user-menu">
        <button>Login</button>
        <button>Signup</button>
      </div>
    </nav>
  );
};

export default Navbar;
