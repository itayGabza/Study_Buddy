module.exports = app => {
  const requests = require("../controllers/requests.controller.js");

  var router = require("express").Router();


  // Create a new request
  router.post("/create", requests.create);

  // Retrieve all requests
  router.get("/findall", requests.findAll);

  //filters the requests
  router.get("/filters", requests.filters);  //TODO filter requests by what?


  // Retrieve a single requests with id
  //router.get("/:email", requests.findOne);  //TODO filter requests by what?

  // find all requests by a student
  router.get("/:email", requests.findAllByStudent);  //TODO filter requests by what?



  app.use('/api/studyRequests', router);
};