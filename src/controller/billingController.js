const Billing = require('../models/billingModel');

// Create a new billing record
exports.addBill = async (req, res) => {
  try {
    const newBill = new Billing(req.body);
    await newBill.save();
    res.status(201).json(newBill);
  } catch (error) {
    res.status(500).json({ message: 'Error adding bill', error });
  }
};

// Get all billing records
exports.getBills = async (req, res) => {
  try {
    const bills = await Billing.find().populate('patientId');
    res.status(200).json(bills);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching bills', error });
  }
};

// Update billing information
exports.updateBill = async (req, res) => {
  try {
    const bill = await Billing.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(bill);
  } catch (error) {
    res.status(500).json({ message: 'Error updating bill', error });
  }
};

// Delete billing record
exports.deleteBill = async (req, res) => {
  try {
    await Billing.findByIdAndDelete(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: 'Error deleting bill', error });
  }
};
