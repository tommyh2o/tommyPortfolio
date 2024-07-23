import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Header from './components/header';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Contact from './components/Contact';
import './styles.css';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

const Home = () => (
  <div className="container">
    <section id="home">
      <h1>Welcome to My Portfolio</h1>
      <p>Explore my projects and learn more about my work.</p>
    </section>
  </div>
);

export default App;
