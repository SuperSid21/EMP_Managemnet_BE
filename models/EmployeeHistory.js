const mongoose = require('mongoose');

const employeeHistorySchema = new mongoose.Schema({
  employeeId: mongoose.Schema.Types.ObjectId,
  oldData: Object,
  updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('EmployeeHistory', employeeHistorySchema);