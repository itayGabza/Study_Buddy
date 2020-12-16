module.exports = app => {
    const requests = require("../controllers/requests.controller.js");
  
    var router = require("express").Router();
  

    // Create a new request
    router.post("/requests", requests.create);

    // Retrieve all requests
    router.get("/requests", requests.findAll);
  
    // Retrieve a single requests with id
    router.get("/:email", requests.findOne);  //TODO filter requests by what?
  
  
    app.use('/api/requests', router);
  };