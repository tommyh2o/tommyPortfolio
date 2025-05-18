import React, { useEffect, useState } from "react";
import "./portfolio.css"; // Using our new dedicated CSS file
import bobo from "../img/bobo.png";
import outlier from "../img/outlier.png";
import amazon from "../img/amazon.png";

const Portfolio = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Set visibility after component mount to trigger animations
    setIsVisible(true);
    
    // Set up intersection observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe all cards
    document.querySelectorAll(".card").forEach((card) => {
      observer.observe(card);
    });

    return () => {
      // Clean up observer when component unmounts
      document.querySelectorAll(".card").forEach((card) => {
        observer.unobserve(card);
      });
    };
  }, []);

  const workExperiences = [
    {
      id: 1,
      title: "Outlier - Remote Coding Expertise for AI Training - Tier 3",
      date: "May 2024 - Present",
      bulletOne:
        "Collaborated with Outlier AI to train and refine AI model responses, improving response accuracy and relevance.",
      bulletTwo:
        "Implemented advanced coding techniques using C++ and Java to enhance the functionality and accuracy of AI-generated responses, resulting in more precise user interactions.",
      bulletThree:
        "Collaborated with peers via Slack to ensure understanding of project requirements and instructions, using effective communication strategies to align team efforts.",
      bulletFour:
        "Completed over 20 tasks with an 85% success rate.",
      technologies: ["C/C++", "Java", "Python", "AI Training", "Slack"],
      isNew: true,
      imageUrl: outlier,
    },
    {
      id: 2,
      title: "BoBo - Mobile Development Intern",
      date: "April 2024 - December 2024",
      bulletOne:
        "Developed frontend features using Flutter and Dart for a mobile application to assist roommates in managing household chores and tasks, enhancing user experience.",
      bulletTwo:
        "Led team collaboration to optimize task completion and streamlined workflow processes, reducing project turnaround time by 15%.",
      bulletThree:
        "Contributed to a startup team of approximately 20 members, supporting various development tasks and fostering team cohesion.",
      bulletFour:
        "Launched the app to the Apple App Store and Google Play Store.",
      technologies: ["Flutter", "Dart", "Firebase", "Git", "Slack", "Notion"],
      isNew: false,
      imageUrl: bobo,
    },
    {
      id: 3,
      title: "Amazon - Operations Intern",
      date: "May 2023 - August 2023",
      bulletOne:
        "Employed Python to implement a program for calculating standard rates for handling oversized packages.",
      bulletTwo:
        "Developed a Python program that conducted field test simulation using collected rates and historical data.",
      bulletThree:
        "Proposed a new method using results from the program that led to a 33% increase in the efficiency of oversized package handling.",
      bulletFour:
        "Presented the results to site stakeholders, showcasing its positive impact on operational efficiency and safety.",
      technologies: ["Python", "", "Data Analysis", "Excel", "Presentation"],
      isNew: false,
      imageUrl: amazon,
    },
  ];

  return (
    <section id="portfolio" className={isVisible ? "visible" : ""}>
      <section className="section-container">
        <h2>Work Experience</h2>
        <h4>
          An up-to-date list of all of my work experiences thus far.
        </h4>
      </section>
      <div className="portfolio-grid">
        {workExperiences.map((experience) => (
          <div key={experience.id} className="card">
            {experience.isNew && <span className="new-tag">New</span>}
            <div className="card-content">
              <div className="card-image-container">
                <img
                  src={experience.imageUrl}
                  alt={experience.title}
                  className="card-image"
                />
              </div>
              <div className="card-text">
                <h3>{experience.title}</h3>
                <p>{experience.date}</p>
                <ul>
                  <li>{experience.bulletOne}</li>
                  <li>{experience.bulletTwo}</li>
                  <li>{experience.bulletThree}</li>
                  <li>{experience.bulletFour}</li>
                </ul>
                <div className="tech-stack">
                  {experience.technologies.map((tech, index) => (
                    <span key={index} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;