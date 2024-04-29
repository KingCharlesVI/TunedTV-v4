// components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src="https://i.imgur.com/TsGbvE0.jpg" alt="TunedTV Logo" />
      </div>
      <nav className="nav">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/schedule">Schedule</Link></li>
          <li><Link to="/live-stream">Live Stream</Link></li>
          <li><Link to="/about-us">About Us</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;