module.exports = app => {
  const studOpenDets = require("../controllers/studOpenDets.controller.js");

  var router = require("express").Router();

  //creating a new chart for the details that are open
  router.post("/create", studOpenDets.create);

  // Retrieve all studOpenDets
  router.get("/findAll", studOpenDets.findAll);

  // Retrieve a single studOpenDets with id
  // router.get("/:email", studOpenDets.findOne);

  //update the studOpenDets details
  router.put("/:email", studOpenDets.update);


  app.use('/api/studOpenDets', router);
};