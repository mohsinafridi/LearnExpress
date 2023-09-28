const EmployeeModel = require("../models/employee");
 
exports.getAllEmployees = async () => {
  return await EmployeeModel.find();
}