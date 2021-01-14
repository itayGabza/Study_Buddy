module.exports = app => {
  const studOpenByMatches = require("../controllers/studOpenByMatches.controller.js");

  var router = require("express").Router();

  //creating a new chart for the studOpenByMatches
  router.post("/create", studOpenByMatches.create);

  // Retrieve all studOpenByMatches
  router.get("/findAll", studOpenByMatches.findAll);

  // Retrieve a single studOpenByMatches with email
  // router.get("/:email", studOpenByMatches.findOne);

  //update the studOpenByMatches details
  router.put("/:email", studOpenByMatches.update);


  app.use('/api/studOpenByMatches', router);
};