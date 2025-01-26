const express = require('express');
const router = express.Router();
const Patient = require('../models/patient.model.js'); // Correct path to the Patient model

// Get all patients
router.get('/', async (req, res) => {
    try {
        const patients = await Patient.find();
        res.json(patients);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

// Add a new patient
router.post('/', async (req, res) => {
    try {
        const newPatient = new Patient(req.body);
        await newPatient.save();
        res.status(201).json(newPatient);
    } catch (err) {
        res.status(400).send(err.message);
    }
});

module.exports = router;
