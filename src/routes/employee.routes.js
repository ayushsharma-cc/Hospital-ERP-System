const express = require('express');
const router = express.Router();
const Employee = require('../models/employee.model.js');
 // Importing the Employee model

// Get all employees
router.get('/', async (req, res) => {
    try {
        const employees = await Employee.find();
        res.json(employees);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

// Add a new employee
router.post('/', async (req, res) => {
    try {
        const newEmployee = new Employee(req.body);
        await newEmployee.save();
        res.status(201).json(newEmployee);
    } catch (err) {
        res.status(400).send(err.message);
    }
});

module.exports = router;
