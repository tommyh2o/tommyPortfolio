import React from "react";
import { motion } from "framer-motion";
import folderPic from "../img/folder.png";
import paceIQ from "../img/paceiq.png";
import portfolio from "../img/portfolio.png";
import scavengers from "../img/scavengers.png";
import "./projects.css"; // Make sure to import the CSS file

const projectsList = [
  {
    title: "PaceIQ",
    description: "A running performance tracker built with React and Firebase.",
    image: paceIQ,
    link: "https://github.com/tommyh2o/paceIQ.git"
  },
  {
    title: "Personal Portfolio",
    description: "A personal portfolio build with React.",
    image: portfolio,
    link: "https://github.com/tommyh2o/tommyPortfolio.git"
  },
  {
    title: "1st Street Scavengers",
    description: "A webpage for a local thrift club built with React.",
    image: scavengers,
    link: "https://github.com/tommyh2o/1stStreetScavengers"
  },
  {
    title: "STDHelp",
    description: "A webpage aimed at helping spread awareness of the prevalence of STDs, specifically in California.",
    image: folderPic,
    link: "https://gitlab.com/tommyhuynh02n/cs373-group-20"
  }
];

export default function Projects() {
  return (
    <div className="projects-page">
      <h1>My Projects</h1>
      <div className="projects-list">
        {projectsList.map((project, index) => (
          <motion.div
            className="project-row"
            key={index}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                View Project
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
