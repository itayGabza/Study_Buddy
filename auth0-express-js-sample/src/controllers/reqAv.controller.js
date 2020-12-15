const db = require("../models/db.js");
const ReqAv = db.reqAv;
const Op = db.Sequelize.Op;

// Create and Save a new Request


// Retrieve all reqAv from the database.
exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

  ReqAv.findAll({ where: condition })
    .then(data => {
      if (Array.isArray(data))
        res.send(data);
      else
        res.send([data])
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving reqAv."
      });
    });
};

// Find a single reqAv with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  ReqAv.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving reqAv with id=" + id
      });
    });
};


