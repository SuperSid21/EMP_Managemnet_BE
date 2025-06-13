const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  name: String,
  email: String,
  address: String,
  experience: String,
  lastCompany: String,
  resignationDate: Date,
  joiningDate: Date,
}, { timestamps: true });

module.exports = mongoose.model('Employee', employeeSchema);