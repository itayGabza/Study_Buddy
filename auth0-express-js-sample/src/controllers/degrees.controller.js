const db = require("../models/db.js");
const Degrees = db.degrees;
const Op = db.Sequelize.Op;

// Create and Save a new degrees


// Retrieve all degrees from the database.
exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

  Degrees.findAll({ where: condition })
    .then(data => {
      if (Array.isArray(data))
        res.send(data);
      else
        res.send([data])
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving degrees."
      });
    });
};

// Find a single degrees with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Degrees.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving degrees with id=" + id
      });
    });
};


