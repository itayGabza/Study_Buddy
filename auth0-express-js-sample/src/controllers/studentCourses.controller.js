const db = require("../models/db.js");
const StudentCourses = db.studentCourses;
const Op = db.Sequelize.Op;

// Create and Save a new Student-courses


// Retrieve all Student-courses from the database.
exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

  StudentCourses.findAll({ where: condition })
    .then(data => {
      if (Array.isArray(data))
        res.send(data);
      else
        res.send([data])
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving student-courses."
      });
    });
};

// Find a single Student-courses with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  StudentCourses.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Student-courses with id=" + id
      });
    });
};


