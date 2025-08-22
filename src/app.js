import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Parallax } from "react-parallax";
import { motion } from "framer-motion";
import Header from "./components/header";
import Portfolio from "./components/portfolio";
import Contact from "./components/contact";
import Projects from "./components/projects";
import SeattleSkyline from "./img/SeattleSkyline.jpg";
import profilePic from "./img/homePhoto.jpg";
import "./styles.css";

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </div>
    </Router>
  );
};

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [typingComplete, setTypingComplete] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    // Set typing complete after the animation duration
    const timer = setTimeout(() => {
      setTypingComplete(true);
    }, 1980);

    return () => clearTimeout(timer);
  }, []);

  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const skills = [
    { name: "CSS", level: 50, description: "Intermediate" },
    { name: "C/C++", level: 50, description: "Intermediate" },
    { name: "Flutter/Dart", level: 50, description: "Intermediate" },
    { name: "HTML", level: 50, description: "Intermediate" },
    { name: "Java", level: 75, description: "Proficient" },
    { name: "JavaScript", level: 75, description: "Proficient" },
    { name: "Kotlin", level: 25, description: "Beginner" },
    { name: "Python", level: 75, description: "Proficient" },
    { name: "React", level: 75, description: "Proficient" },
    { name: "SQL", level: 25, description: "Beginner" },
  ];

  return (
    <div className="container">
      <Parallax bgImage={SeattleSkyline} strength={300}>
        <div style={{ height: "500px" }}>
          <section id="home" className="parallax-content">
            <motion.div
              className="hero"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
            >
              <motion.h1
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                Hello, I'm Tommy Huynh
              </motion.h1>
              <motion.div
                className={
                  typingComplete ? "typewriter-complete" : "typewriter"
                }
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 1.5, duration: 2 }}
              >
                <h2>Software Developer & Engineer</h2>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3, duration: 1 }}
                className="hero-buttons"
              >
                <Link to="/portfolio" className="btn">
                  View My Work
                </Link>
                <a href="#contact" className="btn btn-outline">
                  Contact Me
                </a>
              </motion.div>
            </motion.div>
          </section>
        </div>
      </Parallax>

      <motion.section
        className="about-section"
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={fadeInVariants}
      >
        <motion.img
          src={profilePic}
          alt="Tommy Q Huynh"
          className="about-photo"
          transition={{ duration: 0.3 }}
        />
        <div className="about-content">
          <motion.h2 variants={fadeInVariants}>Who am I?</motion.h2>
          <motion.p variants={fadeInVariants}>
            Hello! I'm Tommy Huynh, a recent graduate from the University of
            Texas at Austin (May 2024) with a strong passion for coding and
            software development. I'm excited to break into the tech industry,
            especially in Software Development and Engineering roles, though I'm
            open to opportunities that fit my skills. My commitment to customer
            satisfaction, meeting deadlines, and continuously improving my
            skills drives me to excel in every project. I believe my eagerness
            to learn and the experiences I've gathered so far make me a strong
            candidate for roles in fast-paced, innovative environments.
          </motion.p>
          <motion.div variants={fadeInVariants} whileHover={{ scale: 1.05 }}>
            <Link to="/portfolio" className="btn">
              Explore My Portfolio
            </Link>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        className="skills-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2>My Skills</h2>
        <div className="skills-container">
          {skills.map((skill, index) => (
            <div className="skill-item" key={index}>
              <div className="skill-info">
                <span className="skill-name">{skill.name}</span>
                <span className="skill-percentage">{skill.description}</span>
              </div>
              <div className="skill-bar">
                <motion.div
                  className="skill-progress"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: index * 0.2 }}
                  viewport={{ once: true }}
                />
              </div>
            </div>
          ))}
        </div>

        <h2>Let's Connect</h2>
        <p>Interested in working together? Feel free to reach out!</p>
        <div className="contact-icons">
          <motion.a
            href="mailto:tommyhuynh02n@gmail.com"
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.3 }}
            aria-label="Email"
          >
            <i className="fas fa-envelope"></i>
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/tommy-huynh-029a341a9"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.3 }}
            aria-label="LinkedIn"
          >
            <i className="fab fa-linkedin-in"></i>
          </motion.a>
          <motion.a
            href="https://github.com/tommyh2o"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.3 }}
            aria-label="GitHub"
          >
            <i className="fab fa-github"></i>
          </motion.a>
        </div>
      </motion.section>

      <footer className="footer">
        <p>
          &copy; {new Date().getFullYear()} Tommy Huynh. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default App;
