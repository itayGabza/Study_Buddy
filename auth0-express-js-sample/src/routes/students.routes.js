module.exports = app => {
  const students = require("../controllers/students.controller.js");

  var router = require("express").Router();
  // Create a new Student
  router.post("/create", students.create);

  // Retrieve all Students
  router.get("/findall", students.findAll);

  // Retrieve a single Student with email
  router.get("/:email", students.findOne);

  // Retrieve all opened details from a student
  router.get("/openDets/:email", students.openDets);

  // Retrieve all opened details from a student
  router.get("/matchDets/:email", students.matchDets);

  // Update a Student with id
  router.put("/:email", students.update);

  // Delete a Student with id
  router.delete("/:email", students.delete);

  // Delete all Students
  router.delete("/", students.deleteAll);

  app.use('/api/students', router);
};