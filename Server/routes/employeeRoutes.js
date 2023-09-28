const express = require("express");
 const { getAllEmployees } = require("../controller/employeeController");
 
const router = express.Router();


// router.get('/blog', (req, res) => {
//     res.send('Hello Blog, My name is Devtamin')
// })

//router.route("/employees").get(getAllEmployees);
//router.route("/:id").get(getBlogById).put(updateBlog).delete(deleteBlog);
 
module.exports = router;


// https://blog.appsignal.com/2022/08/17/build-a-crud-app-with-nodejs-and-mongodb.html