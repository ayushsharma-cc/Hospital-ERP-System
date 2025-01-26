const mongoose = require('mongoose');

const billingSchema = new mongoose.Schema({
  patientId: { type: mongoose.Schema.Types.ObjectId, ref: 'Patient', required: true },
  totalAmount: { type: Number, required: true },
  amountPaid: { type: Number, required: true },
  paymentStatus: { type: String, enum: ['paid', 'unpaid'], default: 'unpaid' },
  billDate: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Billing', billingSchema);