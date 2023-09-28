const employeeService = require("../services/EmployeeService.js");

async  function getAllEmployees(req, res) {
    try {
      debugger;
      const employees = await employeeService.getAllEmployees();
      res.json({ data: employees, status: "success" });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };

// By ID
 async function getEmployeeById(req, res) {
    try {
        const {id} = req.params;
        const employee = await employeeService.getEmployeeById(id);
        res.status(200).json(employee);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

//post 
async function addEmployee(req, res)  {
    try {
        const employee = await employeeService.addEmployee(req)
        res.status(200).json(employee);
        
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
}

// put
async function  updateEmployee(req, res) {
    try {
        const {id} = req.params;
        const employee = await employeeService.updateEmployee(id, req);
        // we cannot find any product in database
        if(!employee){
            return res.status(404).json({message: `cannot find any employee with ID ${id}`})
        }
        const updatedEmployee = await Employee.findById(id);
        res.status(200).json(updatedEmployee);
        
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

 // Delete a Product
 async function  deleteEmployee(req, res) {
    try {
        const {id} = req.params;
        const employee = await employeeService.deleteEmployee(id);
        if(!employee){
            return res.status(404).json({message: `cannot find any Employee with ID ${id}`})
        }
        res.status(200).json(employee);
        
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}
module.exports = {
  getAllEmployees,
  getEmployeeById,
  addEmployee,
  updateEmployee,
  deleteEmployee
};