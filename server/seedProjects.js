require("dotenv").config();
const mongoose = require("mongoose");
const Project = require("./models/Project");

const dummyProjects = [
  {
    title: "Portfolio Website",
    description:
      "A responsive personal portfolio built with React and Tailwind CSS.",
    image: "https://via.placeholder.com/300x200",
    url: "https://yourportfolio.com",
  },
  {
    title: "Task Manager App",
    description: "Full-stack task manager app using MERN stack.",
    image: "https://via.placeholder.com/300x200",
    url: "https://github.com/yourusername/task-manager",
  },
  {
    title: "Weather Dashboard",
    description: "A weather app using the OpenWeatherMap API.",
    image: "https://via.placeholder.com/300x200",
    url: "https://weather-app-demo.netlify.app",
  },
];

mongoose
  .connect(process.env.MONGO_URI)
  .then(async () => {
    await Project.deleteMany({});
    await Project.insertMany(dummyProjects);
    console.log("✅ Seeded dummy projects!");
    mongoose.disconnect();
  })
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err);
  });
