const mongoose = require("mongoose");


const employeeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please add employee name"]
    },
    position: String,
    office: String
});

module.exports = mongoose.model("Employee", employeeSchema);