/*const mongoose = require('mongoose');

var Employee = mongoose.model('Employees', {
    name: { type: String },
    position: { type: String },
    office: { type: String },
    salary: { type: Number }
});

module.exports = { Employee };
*/


const mongoose = require("mongoose");
const Schema = mongoose.Schema;
 
const employeeSchema = new Schema({
    name: String,
    position: String,
    office: String,
    salary:Number,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
 
module.exports = mongoose.model("Employee", employeeSchema);