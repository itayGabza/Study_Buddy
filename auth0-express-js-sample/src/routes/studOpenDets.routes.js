module.exports = app => {
  const studOpenDets = require("../controllers/studOpenDets.controller.js");

  var router = require("express").Router();

  //creating a new chart for the details that are open
  router.post("/create", studOpenDets.create);

  // Retrieve all student-courses
  router.get("/findAll", studOpenDets.findAll);

  // Retrieve a single student-courses with id
  router.get("/:email", studOpenDets.findOne);


  app.use('/api/studOpenDets', router);
};