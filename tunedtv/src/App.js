// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import LiveStream from './components/LiveStream';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import Schedule from './components/Schedule';
import News from './components/News';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/live-stream" element={<LiveStream />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/news" element={<News />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;