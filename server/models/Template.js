const mongoose = require('mongoose');
const TemplateSchema = new mongoose.Schema({
  title: String,
  content: String,
});
module.exports = mongoose.model('Template', TemplateSchema);