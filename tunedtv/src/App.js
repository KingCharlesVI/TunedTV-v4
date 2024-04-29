// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Schedule from './components/Schedule';
import LiveStream from './components/LiveStream';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import Calendar from './components/Calendar';
import News from './components/News'; // Import the News component

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/live-stream" component={LiveStream} />
          <Route path="/about-us" component={AboutUs} />
          <Route path="/contact" component={Contact} />
          <Route path="/calendar" component={Calendar} />
          <Route path="/news" component={News} /> {/* Add route for the News page */}
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;