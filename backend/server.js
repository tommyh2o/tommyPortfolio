const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Root route
app.get("/", (req, res) => res.send("🚀 Backend is alive!"));

// Test email route
app.get("/test-email", async (req, res) => {
  console.log("🔥 /test-email called");
  try {
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: "Test Email from Portfolio Backend",
      text: "If you’re reading this, your backend email setup works! 🎉",
    });

    res.status(200).json({ success: "Test email sent successfully!" });
  } catch (error) {
    console.error("Error in /test-email:", error);
    res.status(500).json({ error: "Failed to send test email." });
  }
});

// Contact form route
app.post("/contact", async (req, res) => {
  console.log("🔥 /contact called", req.body);
  try {
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
      return res.status(400).json({ error: "All fields are required." });
    }

    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `Portfolio Contact from ${name}`,
      text: message,
    });

    console.log("Email sent successfully");
    res.status(200).json({ success: "Message sent successfully!" });
  } catch (error) {
    console.error("Error in /contact:", error);
    res.status(500).json({ error: "Failed to send message." });
  }
});

// Listen on fixed port
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
