const express = require('express');
const router = express.Router();
const inventoryController = require('../controller/inventoryController');



// Routes
router.post('/', inventoryController.addItem);
router.get('/', inventoryController.getItems);
router.put('/:id', inventoryController.updateItem);
router.delete('/:id', inventoryController.deleteItem);

module.exports = router;