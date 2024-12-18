import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Parallax } from "react-parallax";
import Header from "./components/header";
import Portfolio from "./components/portfolio";
import About from "./components/about";
import Contact from "./components/contact";
import SeattleSkyline from "./img/SeattleSkyline.jpg";
import profilePic from "./img/homePhoto.jpg";
import folderPic from "./img/folder.png"
import "./styles.css";

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
    <Parallax bgImage={SeattleSkyline} strength={300}>
      <div style={{ height: "500px" }}>
        <section id="home" className="parallax-content">
          <div className="hero">
            <h1>Hello, welcome to my personal portfolio!</h1>
          </div>
        </section>
      </div>
    </Parallax>

    <section className="about-section">
      <img src={profilePic} alt="Tommy Q Huynh" className="about-photo" />
      <div className="about-content">
        <h2>Who am I?</h2>
        <p>
          Hello! I'm Tommy Huynh, a recent graduate from the University of Texas
          at Austin (May 2024) with a strong passion for coding and software
          development. I’m excited to break into the tech industry, especially
          in Software Development and Engineering roles, though I'm open to
          opportunities that fit my skills. My commitment to customer
          satisfaction, meeting deadlines, and continuously improving my skills
          drives me to excel in every project. I believe my eagerness to learn
          and the experiences I've gathered so far make me a strong candidate
          for roles in fast-paced, innovative environments. Feel free to click
          the link below to learn more about my journey and skills!
        </p>
        <Link to="/about" className="about-link">
          My about page.
        </Link>
      </div>
    </section>

    <section className="folder-section">
      <img src={folderPic} alt="Folder" className="folder-photo" />
      <div className="folder-content">
        <h2>Portfolio</h2>
        <p>
          Take a look at all of my projects and work experience!
        </p>
        <Link to="/portfolio" className="portfolio-link">
          My portfolio page.
        </Link>
      </div>
    </section>
  </div>
);

export default App;
