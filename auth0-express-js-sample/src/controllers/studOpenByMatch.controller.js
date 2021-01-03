const db = require("../models/db.js");
const StudOpenByMatch = db.studOpenByMatch;
const Op = db.Sequelize.Op;

// Create and Save a new studOpenByMatch


// Retrieve all studOpenByMatch from the database.
exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

  StudOpenByMatch.findAll({ where: condition })
    .then(data => {
      if (Array.isArray(data))
        res.send(data);
      else
        res.send([data])
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving studOpenByMatch."
      });
    });
};

// Find a single studOpenByMatch with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  StudOpenByMatch.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving studOpenByMatch with id=" + id
      });
    });
};


