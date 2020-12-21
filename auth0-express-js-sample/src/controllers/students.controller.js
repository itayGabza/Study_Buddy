const db = require("../models/db.js");
const Student = db.students;
const Requests = db.requests;
const Op = db.Sequelize.Op;


//Email*	name	password	gender	age	degree
// Create and Save a new Student
exports.create = (req, res) => {
  // Validate request
  const body = req.body;
  if (!body.email || !body.name || !body.password || !body.gender || !body.age || !body.degree) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Students
  const student = {
    email: body.email,
    name: body.name,
    password: body.password,
    gender: body.gender,
    age: body.age,
    degree: body.degree,
  };
  // Save Students in the database
  Student.create(student)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial."
      });
    });
};

// Retrieve all Students from the database.
exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

  Student.findAll({ where: condition })
    .then(data => {
      if (Array.isArray(data))
        res.send(data);
      else
        res.send([data])
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving students."
      });
    });
};


exports.findOne = (req, res) => {
  const email = req.params.email;
  return Student.findByPk(email)
    .then((data) => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Student with email=" + email
      });
    });
};



// Find a single Student with an id
exports.findOne = (req, res) => {
  const email = req.params.email;
  return Student.findByPk(email)
    .then((data) => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Student with email=" + email
      });
    });
};

// Update a Student by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Student.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Student was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Student with id=${id}. Maybe Student was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Student with id=" + id
      });
    });
};

// Delete a Student with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Student.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Student was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Student with id=${id}. Maybe Tutorial was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Student with id=" + id
      });
    });
};

// Delete all Student from the database.
exports.deleteAll = (req, res) => {
  Student.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Student were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Student."
      });
    });
};