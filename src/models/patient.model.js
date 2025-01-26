const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true },
    diagnosis: { type: String },
    medicalHistory: { type: String },
    currentTreatment: { type: String },
    contact: { type: String },
});

// Correctly export the model
module.exports = mongoose.model('Patient', patientSchema);
