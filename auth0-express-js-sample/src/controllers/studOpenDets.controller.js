const db = require("../models/db.js");
const Sod = db.studOpenDets;
const Op = db.Sequelize.Op;

// Create and Save a new studOpenDet
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

  // Create a studOpenDet
  const studOpenDet = {
    studentsEmail: req.body.studentEmail,
    email: req.body.email,
    facebook: req.body.facebook,
    phone: req.body.phone,
    picture: req.body.picture,
    openText: req.body.openText
  };
  // Save studOpenDet in the database
  Sod.create(studOpenDet)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the studOpenDet."
      });
    });
};


// Retrieve all studOpenDet from the database.
exports.findAll = (req, res) => {
  const email = req.query.email;
  var condition = email ? { studentsemail: { [Op.like]: `%${email}%` } } : null;

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
  const email = req.params.email;

  Sod.findByPk(email)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving studOpenDet with id=" + email
      });
    });
};


