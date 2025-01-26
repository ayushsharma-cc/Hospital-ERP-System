const mongoose = require('mongoose');

const inventorySchema = new mongoose.Schema({
  productName: { type: String, required: true },
  quantity: { type: Number, required: true },
  price: { type: Number, required: true },
  category: { type: String },
});

module.exports = mongoose.model('Inventory', inventorySchema);