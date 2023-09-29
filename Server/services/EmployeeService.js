const EmployeeModel = require("../models/employee");

async function getAllEmployees() {
  return await EmployeeModel.find();
}

// Retrieve an Employee by ID
async function getEmployeeById(id) {
  return await EmployeeModel.findById(id);
}

// Retrieve an Employee by ID
async function addEmployee(req) {
  const employee = await EmployeeModel.create(req.body)
  return await employee.save();
}

// Update an Employee by ID
async function updateEmployee(id, req) {
  return await EmployeeModel.findByIdAndUpdate(id, req.body, { new: true });
}

// Delete an Employee by ID
async function deleteEmployee(id) {
  return await EmployeeModel.findByIdAndRemove(id);
}


module.exports = {
  getAllEmployees,
  getEmployeeById,
  addEmployee,
  updateEmployee,
  deleteEmployee
};