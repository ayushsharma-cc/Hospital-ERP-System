const express = require('express');
const router = express.Router();
const billingController = require('../controller/billingController');

// Routes
// Create a new billing record
router.post('/', billingController.addBill);

// Get all billing records
router.get('/', billingController.getBills);

// Update a billing record by ID
router.put('/:id', billingController.updateBill);

// Delete a billing record by ID
router.delete('/:id', billingController.deleteBill);

module.exports = router;
