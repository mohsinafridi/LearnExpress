const asyncHandler = require("express-async-handler");
const employeeService = require("../services/EmployeeService.js");

const getAllEmployees = asyncHandler(async (req, res) => {
    const employees = await employeeService.getAllEmployees();
    res.status(200).json(employees);
});

// By ID
const getEmployee = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const employee = await employeeService.getEmployeeById(id);
    if (!employee) {
        res.status(404);
        throw new Error("Employee not found");
    }
    res.status(200).json(employee);

});

//post 
const addEmployee = asyncHandler(async (req, res) => {
    const { name, office, position } = req.body;
    if (!name || !office || !position) {
        res.status(400);
        throw new Error("All fields are mandatory.");
    }

    const employee = await employeeService.addEmployee(req)
    res.status(201).json(employee);
});

//@desc Update Employee
//@route PUT /api/Employee/:id
//@access private
const updateEmployee = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const employee = await employeeService.updateEmployee(id, req);
    if (!employee) {
        res.status(404);
        throw new Error("Employee not found");
    }
    // if (contact.user_id.toString() !== req.user.id) {
    //     res.status(403);
    //     throw new Error("User don't have permission to update other user contacts");
    //   }    
    const updatedContact = await employeeService.updateEmployee(
        req.params.id,
        req.body,
        { new: true }
    );
    res.status(200).json(updatedContact);
});

// Delete a Product
const deleteEmployee = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const employee = await employeeService.deleteEmployee(id);
    if (!employee) {
        return res.status(404).json({ message: `cannot find any Employee with ID ${id}` })
    }
    res.status(200).json(employee);
});

module.exports = {
    getAllEmployees,
    getEmployee,
    addEmployee,
    updateEmployee,
    deleteEmployee
};