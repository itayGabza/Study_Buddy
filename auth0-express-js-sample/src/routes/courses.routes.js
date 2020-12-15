module.exports = app => {
    const courses = require("../controllers/courses.controller.js");
  
    var router = require("express").Router();
  
    // Retrieve all student-courses
    router.get("/courses", courses.findAll);
  
    // Retrieve a single student-courses with id
    router.get("/:snum", courses.findOne);
  
  
    app.use('/api/courses', router);
  };