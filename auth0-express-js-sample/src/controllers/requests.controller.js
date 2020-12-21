const db = require("../models/db.js");
const Requests = db.requests;
const Students = db.students;

const Op = db.Sequelize.Op;

// Create and Save a new Request
  // Create a request
  exports.create = (req , res) => {
    // Validate request
    const body = req.body;
    if (!body.studentmail || !body.course || !body.studyMethod || !body.studyingFor) {
      res.status(400).send({
        message: "having problems with creating requests. wrong parameters were sent"
      });
      return;
    }
  const request = {
    studentemail: req.body.studentemail,
    course: body.course,
    studyMethod: body.description,
    studyingFor: body.studyingFor,
    groupSize: body.groupSize ? body.groupSize : 2
  };
  // Save Students in the database
  Requests.create(request)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the request"
      });
      return;
    });
  };

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
exports.findAllByStudent = (req, res) => {
  const email = req.params.email;

  Students.findByPk(email, {include: ["requests"]})
    .then((data) => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Requests with email=" + email
      });
    });
};


