const mongoose = require('mongoose');

const labSchema = new mongoose.Schema({
  patientId: { type: mongoose.Schema.Types.ObjectId, ref: 'Patient', required: true },
  testName: { type: String, required: true },
  testDate: { type: Date, default: Date.now },
  results: { type: String },
  status: { type: String, enum: ['pending', 'completed'], default: 'pending' },
});

module.exports = mongoose.model('LaboratoryTest', labSchema);