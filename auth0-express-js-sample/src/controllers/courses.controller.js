const db = require("../models/db.js");
const Courses = db.courses;
const Op = db.Sequelize.Op;

// Create and Save a new courses


// Retrieve all courses from the database.
exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

  Courses.findAll({ where: condition })
    .then(data => {
      if (Array.isArray(data))
        res.send(data);
      else
        res.send([data])
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving courses."
      });
    });
};

// Find a single courses with an id
exports.findOne = (req, res) => {
  const snum = req.params.snum;

  Courses.findByPk(snum)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving courses with id=" + id
      });
    });
};


