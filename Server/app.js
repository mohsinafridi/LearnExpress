const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const errorHandler = require("./middleware/errorHandler");
const validateToken = require('./middleware/validateTokenHandler');
const dotenv = require("dotenv").config();



const port = 5000;

const dbURL = "mongodb://127.0.0.1:27017/LearnMongo";
mongoose.connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once("open", () => {
  console.log("Connected to MongoDB.");
});
app.use(bodyParser.json());

app.use('/api/employees', require('./routes/employeeRoutes'));
app.use('/api/users', require('./routes/userRoutes'));
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});