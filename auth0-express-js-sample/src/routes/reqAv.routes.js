module.exports = app => {
    const reqAv = require("../controllers/reqAv.controller.js");
  
    var router = require("express").Router();
  
    // Retrieve all student-courses
    router.get("/reqAv", reqAv.findAll);
  
    // Retrieve a single student-courses with id
    router.get("/:id", reqAv.findOne);
  
  
    app.use('/api/reqAv', router);
  };