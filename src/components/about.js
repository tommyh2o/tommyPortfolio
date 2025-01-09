import React from "react";
import "./about.css";

const About = () => {
  return (
    <section id="about">
      <h2>About Me</h2>

      <div className="about-section">
        <img
          src="https://via.placeholder.com/200"
          alt="About me"
          className="about-image"
        />
        <p>
          Hello! I’m a software developer with a passion for creating dynamic and
          user-friendly web applications. I love exploring new technologies and
          solving challenging problems. Here’s a bit more about my journey...
        </p>
      </div>

      <div className="childhood-section">
        <h3>My Childhood</h3>
        <img
          src="https://via.placeholder.com/200"
          alt="Childhood"
          className="childhood-image"
        />
        <p>
          I grew up with a deep curiosity for how things work. Whether it was
          dismantling old toys or experimenting with early computers, my childhood
          was filled with a drive to explore and create. These early experiences
          shaped my love for problem-solving and technology.
        </p>
      </div>

      <div className="hobbies-section">
        <h3>My Hobbies</h3>
        <img
          src="https://via.placeholder.com/200"
          alt="Hobbies"
          className="hobbies-image"
        />
        <p>
          When I’m not coding, you can find me enjoying photography, hiking in
          nature, or playing video games. I also love cooking and experimenting with
          new recipes—it’s a creative outlet that helps me unwind.
        </p>
      </div>
    </section>
  );
};

export default About;
