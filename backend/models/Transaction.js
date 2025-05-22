const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  phone: {
    type: String,
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  mpesaRef: {
    type: String,
    required: true
  },
  status: {
    type: String,
    default: 'pending'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Transaction', transactionSchema);
