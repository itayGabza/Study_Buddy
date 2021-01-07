const db = require("../models/db.js");
const StudOpenByMatch = db.studOpenByMatches;
const Op = db.Sequelize.Op;

// Create and Save a new studOpenByMatch
exports.create = (req, res) => {
  // Validate request
  const binarray = [0, 1];
  if (!req.body.studentEmail || !req.body.email || !req.body.facebook || !req.body.phone || !req.body.picture ||  //TODO verification on the studentEmail
    !binarray.includes(req.body.email) || !binarray.includes(req.body.facebook) || !binarray.includes(req.body.phone) || !binarray.includes(req.body.picture)) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Students
  const studOpenByMatch = {
    studentsEmail: req.body.studentEmail,
    email: req.body.email,
    facebook: req.body.facebook,
    phone: req.body.phone,
    picture: req.body.picture,
    openText: req.body.openText
  };
  // Save Students in the database
  StudOpenByMatch.create(studOpenByMatch)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the studOpenByMatch."
      });
    });
};

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


