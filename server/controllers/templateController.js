const Template = require('../models/Template');
exports.getTemplates = async (req, res) => {
  const data = await Template.find();
  res.json(data);
};