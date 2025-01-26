const LaboratoryTest = require('../models/labModel');  // Ensure correct path to model

// Create a new laboratory test
exports.addTest = async (req, res) => {
  try {
    const newTest = new LaboratoryTest(req.body);
    await newTest.save();
    res.status(201).json(newTest);
  } catch (error) {
    console.error('Error adding test:', error); // Log error for debugging
    res.status(500).json({ message: 'Error adding test', error });
  }
};

// Get all laboratory tests
exports.getTests = async (req, res) => {
  try {
    const tests = await LaboratoryTest.find().populate('patientId');
    res.status(200).json(tests);
  } catch (error) {
    console.error('Error fetching tests:', error); // Log error for debugging
    res.status(500).json({ message: 'Error fetching tests', error });
  }
};

// Update laboratory test result
exports.updateTest = async (req, res) => {
  try {
    const test = await LaboratoryTest.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!test) {
      return res.status(404).json({ message: 'Test not found' });
    }
    res.status(200).json(test);
  } catch (error) {
    console.error('Error updating test:', error); // Log error for debugging
    res.status(500).json({ message: 'Error updating test', error });
  }
};

// Delete a laboratory test
exports.deleteTest = async (req, res) => {
  try {
    const test = await LaboratoryTest.findByIdAndDelete(req.params.id);
    if (!test) {
      return res.status(404).json({ message: 'Test not found' });
    }
    res.status(204).send();
  } catch (error) {
    console.error('Error deleting test:', error); // Log error for debugging
    res.status(500).json({ message: 'Error deleting test', error });
  }
};
