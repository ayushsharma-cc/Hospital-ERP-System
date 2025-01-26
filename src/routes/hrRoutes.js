const express = require('express');
const router = express.Router();
const hrController = require('../controller/hrController'); // Update path if necessary

// Define routes
router.post('/', hrController.addEmployee);
router.get('/', hrController.getEmployees);
router.put('/:id', hrController.updateEmployee);
router.delete('/:id', hrController.deleteEmployee);

module.exports = router;
