const db = require("../models/db.js");
const Requests = db.requests;
const Op = db.Sequelize.Op;

// Create and Save a new Request


// Retrieve all Requests from the database.
exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

  Requests.findAll({ where: condition })
    .then(data => {
      if (Array.isArray(data))
        res.send(data);
      else
        res.send([data])
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Requests."
      });
    });
};

// Find a single Requests with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Requests.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Requests with id=" + id
      });
    });
};


