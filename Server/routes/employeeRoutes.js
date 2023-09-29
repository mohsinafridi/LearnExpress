const express = require("express");
const router = express.Router();
const employeeController = require('../controllers/employeeController');

router.post('/', employeeController.addEmployee);
router.get('/', employeeController.getAllEmployees);
router.get('/:id', employeeController.getEmployee);
router.put('/:id', employeeController.updateEmployee);
router.delete('/:id', employeeController.deleteEmployee);

module.exports = router;

// https://blog.appsignal.com/2022/08/17/build-a-crud-app-with-nodejs-and-mongodb.html