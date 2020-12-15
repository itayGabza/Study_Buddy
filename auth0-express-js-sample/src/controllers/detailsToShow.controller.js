const db = require("../models/db.js");
const Dts = db.detailsToShow;
const Op = db.Sequelize.Op;

// Create and Save a new detailsToShow


// Retrieve all detailsToShow from the database.
exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

  Dts.findAll({ where: condition })
    .then(data => {
      if (Array.isArray(data))
        res.send(data);
      else
        res.send([data])
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving detailsToShow."
      });
    });
};

// Find a single detailsToShow with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Dts.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving detailsToShow with id=" + id
      });
    });
};


