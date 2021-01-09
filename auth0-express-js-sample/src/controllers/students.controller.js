const db = require("../models/db.js");
const Student = db.students;
const Op = db.Sequelize.Op;


//Email*	name	password	gender	age	degree
// Create and Save a new Student
exports.create = (req, res) => {
  // Validate request
  const body = req.body;
  if (!body.email || !body.firstName || !body.lastName || !body.degree) {  // !body.gender || !body.age
    res.status(400).send({
      message: "this Content in creating new student can not be empty!"
    });
    return;
  }
  // Create a Students
  const student = {
    email: body.email,
    firstName: body.firstName,
    lastName: body.lastName,
    aboutMe: body.aboutMe,
    gender: body.gender,
    age: body.age,
    degree: body.degree,
    facebook: body.facebook,
    phone: body.phone
  };
  // Save Students in the database
  Student.create(student)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the student."
      });
    });
};

// Retrieve all Students from the database.
exports.findAll = (req, res) => {
  const title = req.query.title; //TODO
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
  const email = req.params.email;
  console.log("updating student"); //TODO printing comment
  Student.update(req.body, {
    where: { email: email }
  })
    .then(res.send({
      message: `updated the request`
    }))
    .catch(err => {
      res.status(500).send({
        message: "Error updating Student with email=" + email
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
          message: `Cannot delete Student with id=${id}. Maybe Student was not found!`
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