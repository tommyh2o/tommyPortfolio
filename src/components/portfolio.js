import React from "react";
import "../styles.css"; // Ensure you import the CSS file
import bobo from "../img/bobo.png";
import outlier from "../img/outlier.jpeg"

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "BoBo",
      date: "April 2024 - Present",
      description: "Description of project one",
      imageUrl: bobo, // Use the correct path to your images
    },
    {
      id: 2,
      title: "Outlier",
      date: "May 2024 - Present",
      description: "Description of project two",
      imageUrl: outlier, // Use the correct path to your images
    },
  ];

  return (
    <section id="portfolio">
      <section className="section-container">
        <h2>Portfolio</h2>
        <h4>
          A list of all of my experience including work and projects. 
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
