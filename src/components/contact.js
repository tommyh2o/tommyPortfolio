import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false); // Success message visibility
  const [responses, setResponses] = useState([]); // To store submitted form data

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submission started");
  
    try {
      // Save form data to localStorage
      const existingResponses = JSON.parse(localStorage.getItem("responses")) || [];
      const updatedResponses = [...existingResponses, formData];
      localStorage.setItem("responses", JSON.stringify(updatedResponses));
  
      console.log("Form data saved to localStorage");
  
      // Clear the form and show success message
      setIsSubmitted(true);
      setResponses(updatedResponses);
      setFormData({ name: "", email: "", message: "" }); // Clear form data
    } catch (error) {
      console.error("Error saving form data to localStorage", error);
    }
  };
  

  return (
    <section id="contact">
      <h2>Contact</h2>
      
      {/* Success message */}
      {isSubmitted && <p className="success-message">Your message has been sent successfully!</p>}
      
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
