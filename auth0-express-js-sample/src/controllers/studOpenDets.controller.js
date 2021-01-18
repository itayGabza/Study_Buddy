const db = require("../models/db.js");
const Sod = db.studOpenDets;
const Op = db.Sequelize.Op;

// Create and Save a new studOpenDet
exports.create = (req, res) => {
  // Validate request
  const binarray = [0, 1];
  const { studentEmail, email, facebook, phone, picture, openText } = req.body;
  if (!studentEmail || !binarray.includes(email) || !binarray.includes(facebook) ||
    !binarray.includes(phone) || !binarray.includes(picture) || !binarray.includes(openText)) {//TODO verification on the studentEmail
    res.status(400).send({
      message: "problems with content for studOpenByDets"
    });
    return;
  }
  // Create a studOpenDet
  const studOpenDet = {
    studentEmail: studentEmail,
    email: email,
    facebook: facebook,
    phone: phone,
    picture: picture,
    openText: openText
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
  var condition = email ? { studentEmail: email } : undefined;
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

exports.update = (req, res) => {
  const email = req.params.email;
  Sod.update(req.body, {
    where: { studentEmail: email }
  })
    .then(res.send({
      message: `updated the Sod`
    }))
    .catch(err => {
      res.status(500).send({
        message: "Error updating Sod with email=" + email
      });
    });
};


