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
      bulletOne:
        "Developed frontend features using Flutter and Dart for a mobile application to assist roommates in managing household chores and tasks, enhancing user experience.",
      bulletTwo:
        "Led team collaboration to optimize task completion and streamlined workflow processes, reducing project turnaround time by 15%.",
      bulletThree:
        "Contributed to a startup team of approximately 20 members, supporting various development tasks and fostering team cohesion.",
      bulletFour:
        "Lauched the app to the Apple App Store and Google Play Store.",
      imageUrl: bobo, // Use the correct path to your images
    },
    {
      id: 2,
      title: "Outlier - Remote Coding Expertise for AI Training - Tier 3",
      date: "May 2024 - Present",
      bulletOne:
        "Collaborated with Outlier AI to train and refine AI model responses, improving response accuracy and relevance.",
      bulletTwo:
        "Implemented advanced coding techniques using C++ and Java to enhance the functionality and accuracy of AI-generatedresponses, resulting in more precise user interactions.",
      bulletThree:
        "Collaborated with peers via Slack to ensure understanding of project requirements and instructions, using effective communication strategies to align team efforts",
      bulletFour:
        "Completed over 20 task with an 85% success rate.",
      imageUrl: outlier, // Use the correct path to your images
    },
    {
      id: 3,
      title: "Amazon - Operations Intern",
      date: "May 2023 - August 2023",
      bulletOne:
        "Employed Python implement a program for calculating standard rates for handling oversized packages.",
      bulletTwo:
        "Developed a Python program that conducted field test simulation using collected rates and historical data.",
      bulletThree:
        "Proposed a new method using results from the program that led to a 33% increase in the efficiency of oversized package handing.",
      bulletFour:
        "Presented the results to site stakeholders, showcasing its positive impact on operational efficiency and safety.",
      imageUrl: amazon,
    },
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
                <ul>
                  <li>{project.bulletOne}</li>
                  <li>{project.bulletTwo}</li>
                  <li>{project.bulletThree}</li>
                  <li>{project.bulletFour}</li>
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
