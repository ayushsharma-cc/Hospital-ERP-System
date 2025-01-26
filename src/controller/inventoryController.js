const Inventory = require('../models/inventoryModel');

// Create a new inventory item
exports.addItem = async (req, res) => {
  try {
    const newItem = new Inventory(req.body);
    await newItem.save();
    res.status(201).json(newItem);
  } catch (error) {
    res.status(500).json({ message: 'Error adding item', error });
  }
};

// Get all inventory items
exports.getItems = async (req, res) => {
  try {
    const items = await Inventory.find();
    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching items', error });
  }
};

// Update inventory item
exports.updateItem = async (req, res) => {
  try {
    const item = await Inventory.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(item);
  } catch (error) {
    res.status(500).json({ message: 'Error updating item', error });
  }
};

// Delete inventory item
exports.deleteItem = async (req, res) => {
  try {
    await Inventory.findByIdAndDelete(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: 'Error deleting item', error });
  }
};