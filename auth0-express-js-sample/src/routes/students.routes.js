module.exports = app => {
    const students = require("../controllers/students.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Student
    router.post("/students", students.create);
  
    // Retrieve all Students
    router.get("/students", students.findAll);
  
    // Retrieve all published students
    router.get("/published", students.findAllPublished);
  
    // Retrieve a single Student with email
    router.get("/:email", students.findOne);
  
    // Update a Student with id
    router.put("/:email", students.update);
  
    // Delete a Student with id
    router.delete("/:email", students.delete);
  
    // Delete all Students
    router.delete("/", students.deleteAll);
  
    app.use('/api/students', router);
  };