const Employee = require('../models/Employee');
const EmployeeHistory = require('../models/EmployeeHistory');

exports.getEmployees = async (req, res) => {
  const employees = await Employee.find();
  res.json(employees);
};

exports.createEmployee = async (req, res) => {
  const employee = new Employee(req.body);
  await employee.save();
  res.status(201).json(employee);
};

exports.updateEmployee = async (req, res) => {
  const { id } = req.params;
  const old = await Employee.findById(id);
  const updated = await Employee.findByIdAndUpdate(id, req.body, { new: true });
  await new EmployeeHistory({ employeeId: id, oldData: old }).save();
  res.json(updated);
};

exports.deleteEmployee = async (req, res) => {
  await Employee.findByIdAndDelete(req.params.id);
  res.json({ message: 'Deleted' });
};