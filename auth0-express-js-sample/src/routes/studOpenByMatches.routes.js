module.exports = app => {
  const studOpenByMatches = require("../controllers/studOpenByMatches.controller.js");

  var router = require("express").Router();

  //creating a new chart for the details that be open by matching students
  router.post("/create", studOpenByMatches.create);
  // Retrieve all student-courses
  router.get("/findAll", studOpenByMatches.findAll);

  // Retrieve a single student-courses with id
  router.get("/:email", studOpenByMatches.findOne);


  app.use('/api/studOpenByMatches', router);
};