const express = require("express");
var router = express.Router();
const employeeService = require("../services/EmployeeService.js");




exports.getAllEmployees = async (req, res) => {
    try {
        debugger;
      const employees = await employeeService.getAllEmployees();
      res.json({ data: employees, status: "success" });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };

module.exports = router;
