const EmployeeModel = require("../models/employee");
 
async function getAllEmployees(){
  return await EmployeeModel.find();
}

// Retrieve an item by ID
async function getEmployeeById(id) {
  return await Item.findById(id);
}

// Retrieve an item by ID
async function addEmployee(req) {
  const employee = await EmployeeModel.create(req.body)
  return await employee.save();
}

// Update an item by ID
async function updateEmployee(id, req) {
  return await EmployeeModel.findByIdAndUpdate(id, req, { new: true });
}

// Delete an item by ID
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