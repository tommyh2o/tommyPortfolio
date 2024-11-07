import React from "react";
import "../styles.css"; // Ensure you import the CSS file
import bobo from "../img/bobo.png";
import outlier from "../img/outlier.jpeg"
import amazon from "../img/amazon.jpg"

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "BoBo - Mobile Development Intern",
      date: "April 2024 - Present",
      description: "Description of project one",
      imageUrl: bobo, // Use the correct path to your images
    },
    {
      id: 2,
      title: "Outlie - Remote Coding Expertise for AI Training - Tier 3",
      date: "May 2024 - Present",
      description: "Description of project two",
      imageUrl: outlier, // Use the correct path to your images
    },
    {
      id: 3,
      title: "Amazon - Operations Intern",
      date: "May 2023 - August 2023",
      description: "Description of project three",
      imageUrl: amazon,
    }
  ];

  return (
    <section id="portfolio">
      <section className="section-container">
        <h2>Work Experience</h2>
        <h4>
          An up-to-date list of all of my work experiences thus far.
        </h4>
      </section>
      <div className="portfolio-grid">
        {projects.map((project) => (
          <div key={project.id} className="card">
            <div className="card-content">
              <div className="card-image-container">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="card-image"
                />
              </div>
              <div className="card-text">
                <h3>{project.title}</h3>
                <p>{project.date}</p>
                <p>{project.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
