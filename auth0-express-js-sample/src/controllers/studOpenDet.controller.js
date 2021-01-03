const db = require("../models/db.js");
const Sod = db.studOpenDet;
const Op = db.Sequelize.Op;

// Create and Save a new studOpenDet


// Retrieve all studOpenDet from the database.
exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

  Sod.findAll({ where: condition })
    .then(data => {
      if (Array.isArray(data))
        res.send(data);
      else
        res.send([data])
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving studOpenDet."
      });
    });
};

// Find a single studOpenDet with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Sod.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving studOpenDet with id=" + id
      });
    });
};


