module.exports = app => {
  const studOpenByMatch = require("../controllers/studOpenByMatch.controller.js");

  var router = require("express").Router();

  // Retrieve all student-courses
  router.get("/studOpenByMatch", studOpenByMatch.findAll);

  // Retrieve a single student-courses with id
  router.get("/:id", studOpenByMatch.findOne);


  app.use('/api/studOpenByMatch', router);
};