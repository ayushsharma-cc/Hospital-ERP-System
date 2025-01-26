const mongoose = require('mongoose');

const hrSchema = new mongoose.Schema({
  name: { type: String, required: true },
  position: { type: String, required: true },
  salary: { type: Number, required: true },
  contact: { type: String, required: true },
  address: { type: String },
  dateOfJoining: { type: Date, default: Date.now },
});

// Avoid overwriting the model if it already exists
module.exports = mongoose.models.Employee || mongoose.model('Employee', hrSchema);
