module.exports = app => {
    const degrees = require("../controllers/degrees.controller.js");
  
    var router = require("express").Router();
  
    // Retrieve all student-courses
    router.get("/degrees", degrees.findAll);
  
    // Retrieve a single student-courses with id
    router.get("/:id", degrees.findOne);
  
  
    app.use('/api/degrees', router);
  };