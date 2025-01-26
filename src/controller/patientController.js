const Patient = require('./src/models/patient.model.js');

// Create new patient record
exports.addPatient = async (req, res) => {
  try {
    const newPatient = new Patient(req.body);
    await newPatient.save();
    res.status(201).json(newPatient);
  } catch (error) {
    res.status(500).json({ message: 'Error adding patient', error });
  }
};

// Get all patients
exports.getPatients = async (req, res) => {
  try {
    const patients = await Patient.find();
    res.status(200).json(patients);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching patients', error });
  }
};

// Update patient record
exports.updatePatient = async (req, res) => {
  try {
    const patient = await Patient.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(patient);
  } catch (error) {
    res.status(500).json({ message: 'Error updating patient', error });
  }
};

// Delete patient record
exports.deletePatient = async (req, res) => {
  try {
    await Patient.findByIdAndDelete(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: 'Error deleting patient', error });
  }
};