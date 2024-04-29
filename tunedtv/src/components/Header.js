// components/Header.js
import React from 'react';
import './App.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src="tunedtv_logo.png" alt="TunedTV Logo" />
      </div>
      <nav className="nav">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Schedule</a></li>
          <li><a href="#">Live Stream</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
