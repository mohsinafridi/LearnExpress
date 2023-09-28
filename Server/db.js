const mongoose = require("mongoose");

const dbURL = "mongodb://localhost:27018/LearnMongo";

mongoose.set("strictQuery", false)
mongoose.connect(dbURL, {
  useNewUrlParser: true, // Use new URL parser
  useUnifiedTopology: true, // Use new server discovery and monitoring engine
});

// Get the default connection
const db = mongoose.connection;

// Event handling for the database connection
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB..MM..");
});

module.exports = mongoose;



// mongoose.
// connect(dbURL)
// .then(() => {
//     console.log('connected to MongoDB')
//     app.listen(3001, ()=> {
//         console.log(`Node API app is running on port 3001`)
//     });
// }).catch((error) => {
//     console.log(error)
// })