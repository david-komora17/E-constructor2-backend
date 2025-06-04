// backend/models/Property.js

const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema({
  postalAddress: String,
  lrNumber: String,
  permitCertificate: String,
  ownerName: String,
  projectUse: String,
  unitDetails: String,
  mpesaInfo: String,
  bankInfo: String,
  occupancyCertificate: String,
  leasingAgreement: String,
  qrCodeUrl: String
});

module.exports = mongoose.model('Property', propertySchema);
