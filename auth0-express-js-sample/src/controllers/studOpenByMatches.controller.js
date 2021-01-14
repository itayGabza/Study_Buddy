const db = require("../models/db.js");
const StudOpenByMatch = db.studOpenByMatches;
const Op = db.Sequelize.Op;

// Create and Save a new studOpenByMatch
exports.create = (req, res) => {
  // Validate request
  const binarray = [0, 1];
  const { studentEmail, email, facebook, phone, picture, openText } = req.body;
  if (!studentEmail || !binarray.includes(email) || !binarray.includes(facebook) ||
    !binarray.includes(phone) || !binarray.includes(picture) || !binarray.includes(openText)) {//TODO verification on the studentEmail
    res.status(400).send({
      message: "problems with content for studOpenByMatch"
    });
    return;
  }
  // Create a studOpenByMatch
  const studOpenByMatch = {
    studentEmail: studentEmail,
    email: email,
    facebook: facebook,
    phone: phone,
    picture: picture,
    openText: openText
  };
  // Save studOpenByMatch in the database
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


// Retrieve all studOpenDet from the database.
exports.findAll = (req, res) => {
  const email = req.query.email;
  var condition = email ? { studentEmail: email } : undefined;
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

exports.update = (req, res) => {
  const email = req.params.email;
  StudOpenByMatch.update(req.body, {
    where: { studentEmail: email }
  })
    .then(res.send({
      message: `updated the studOpenByMatch`
    }))
    .catch(err => {
      res.status(500).send({
        message: "Error updating studOpenByMatch with email=" + email
      });
    });
};

