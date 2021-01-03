module.exports = app => {
  const studOpenDet = require("../controllers/studOpenDet.controller.js");

  var router = require("express").Router();

  // Retrieve all student-courses
  router.get("/studOpenDet", studOpenDet.findAll);

  // Retrieve a single student-courses with id
  router.get("/:id", studOpenDet.findOne);


  app.use('/api/studOpenDet', router);
};