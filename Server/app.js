const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const employeeRoutes = require('./routes/employeeRoutes');

const app = express();
const port = process.env.PORT || 3000;

const dbURL = "mongodb://127.0.0.1:27017/LearnMongo";
mongoose.connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once("open", () => {
    console.log("Connected to MongoDB.");
  });
app.use(bodyParser.json());

app.use('/employees', employeeRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});






// // const express = require('express');
// // const bodyParser = require('body-parser');
// // //const cors = require('cors');

// // // const { mongoose } = require('./db.js');
// // const EmployeeRouter = require("./routes/employeeRoutes");

// // //var employeeController = require('./controller/employeeController.js');

// // var app = express();
// // app.use(bodyParser.json());
// // app.use(cors({ origin: 'http://localhost:4200' }));


// // app.use("/api/employees", EmployeeRouter);


// // app.listen(3001, () => console.log('Server started at port : 3001'));

// // module.exports = app;
// // //app.use('/employees', employeeController);


// const express = require('express');
// //const mongoose = require('mongoose');
// //const Employee = require('./models/employee');
// //const routers = require('./routes/employeeRoutes.js');

// const app = express()

// app.use(express.json())
// app.use(express.urlencoded({extended: false}))

// //routes
// //const dbURL = "mongodb://127.0.0.1:27017/LearnMongo";
// console.log("WE ARE AT INDEX.js");
// app.get('/', (req, res) => {
//     res.send('Hello NODE API')
// })


// app.get('/me', (req, res) => {
//     res.send('Hello, Mohsin Azam')
// })



// // // By ID
// // app.get('/employees/:id', async(req, res) =>{
// //     try {
// //         const {id} = req.params;
// //         const employee = await Employee.findById(id);
// //         res.status(200).json(employee);
// //     } catch (error) {
// //         res.status(500).json({message: error.message})
// //     }
// // });


// // app.get('/employees', async(req, res) => {
// //     try {
// //         const employees = await Employee.find({});
// //         res.status(200).json(employees);
// //     } catch (error) {
// //         res.status(500).json({message: error.message})
// //     }
// // })

// // // post 
// // app.post('/employees', async(req, res) => {
// //     try {
// //         const employee = await Employee.create(req.body)
// //         res.status(200).json(employee);
        
// //     } catch (error) {
// //         console.log(error.message);
// //         res.status(500).json({message: error.message})
// //     }
// // })

// // // put
// // app.put('/employees/:id', async(req, res) => {
// //     try {
// //         debugger;
// //         const {id} = req.params;
// //         const employee = await Employee.findByIdAndUpdate(id, req.body);
// //         // we cannot find any product in database
// //         if(!employee){
// //             return res.status(404).json({message: `cannot find any employee with ID ${id}`})
// //         }
// //         const updatedEmployee = await Employee.findById(id);
// //         res.status(200).json(updatedEmployee);
        
// //     } catch (error) {
// //         res.status(500).json({message: error.message})
// //     }
// // })

// // // delete a product
// // app.delete('/employees/:id', async(req, res) =>{
// //     try {
// //         const {id} = req.params;
// //         const employee = await Employee.findByIdAndDelete(id);
// //         if(!employee){
// //             return res.status(404).json({message: `cannot find any Employee with ID ${id}`})
// //         }
// //         res.status(200).json(employee);
        
// //     } catch (error) {
// //         res.status(500).json({message: error.message})
// //     }
// // });


// // mongoose.set("strictQuery", false)
// // mongoose.
// // connect(dbURL)
// // .then(() => {
// //     console.log('connected to MongoDB')
// //     app.listen(3001, ()=> {
// //         console.log(`Node API app is running on port 3001`)
// //     });
// // }).catch((error) => {
// //     console.log(error)
// // })