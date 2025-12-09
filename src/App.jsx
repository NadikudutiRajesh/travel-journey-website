import React, { useEffect, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
// import Home from './pages/Home';
// import About from './pages/About';
// import Services from './pages/Services';
// import Packages from './pages/Packages';
// import Contact from './pages/Contact';

// Lazy load pages
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const Packages = lazy(() => import('./pages/Packages'));
const Contact = lazy(() => import('./pages/Contact'));

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Footer from './components/Footer';
import RadionicSpinner from './components/RadionicSpinner';

// Simple loading component - REMOVED in favor of RadionicSpinner

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic',
    });
  }, []);
  return (
    <Router>
      <div className="App">
        <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/packages" element={<Packages />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
