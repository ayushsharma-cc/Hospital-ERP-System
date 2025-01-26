const express = require('express');
const router = express.Router();
const labController = require('../controller/labController');  // Adjust path as needed

// Routes
router.post('/', labController.addTest);
router.get('/', labController.getTests);
router.put('/:id', labController.updateTest);
router.delete('/:id', labController.deleteTest);

module.exports = router;
