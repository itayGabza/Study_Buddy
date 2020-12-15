const db = require("../models/db.js");
const Student = db.students;
const Requests = db.requests;
const Op = db.Sequelize.Op;

// Create and Save a new Student
exports.create = (req, res) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Students
  const students = {
    title: req.body.title,
    description: req.body.description,
    published: req.body.published ? req.body.published : false
  };
  // Save Students in the database
  Student.create(students)
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

// Find a single Student with an id
exports.findOne = (req, res) => {
  const email = req.params.email;


  // return Tutorial.findByPk(tutorialId, { include: ["comments"] })
  // .then((tutorial) => {
  //   return tutorial;
  // })
  // .catch((err) => {
  //   console.log(">> Error while finding tutorial: ", err);
  // });

  // Student.findByPk(email, { include: ["requests"] })
  //   .then((data) => {
  //     return data;
  //   })
  //   .catch((err) => {
  //     res.status(500).send({
  //       message: "Error retrieving Student with email=" + email
  //     });
  //   });

  Student.findByPk(email)
    .then(data => {
      res.send(data);
      res.send(Requests.findByPk(email))
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Requests with id=" + id
        });
      });
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

// Find all published Student
exports.findAllPublished = (req, res) => {
  console.log("got into published students")
  Student.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Student."
      });
    });
};