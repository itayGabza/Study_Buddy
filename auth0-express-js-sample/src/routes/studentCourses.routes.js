module.exports = app => {
    const studentCourses = require("../controllers/studentCourses.controller.js");
  
    var router = require("express").Router();
  
    // Retrieve all student-courses
    router.get("/studentCourses", studentCourses.findAll);
  
    // Retrieve a single student-courses with id
    router.get("/:id", studentCourses.findOne);
  
  
    app.use('/api/studentCourses', router);
  };