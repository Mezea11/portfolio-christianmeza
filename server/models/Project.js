const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  image: String,
  url: String,
});

module.exports = mongoose.model("Project", ProjectSchema);
