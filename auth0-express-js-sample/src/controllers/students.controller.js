const db = require("../models/db.js");
const Student = db.students;
const StudOpenDets = db.studOpenDets;
const StudOpenByMatches = db.studOpenByMatches;
const Op = db.Sequelize.Op;

//Email*	name	password	gender	age	degree
// Create and Save a new Student
exports.create = (req, res) => {
  // Validate request
  const opendets = req.body.studOpenDets;
  const matchdets = req.body.studOpenByMatches;
  var { email, firstName, lastName, aboutMe, gender, age, degree, facebook, phone } = req.body.studentDetails;
  if (!email || !firstName || !lastName || !degree) {  // !body.gender || !body.age
    res.status(400).send({
      message: "this Content in creating new student can not be empty!"
    });
    return;
  }
  // Create a Students
  const student = {
    email: email,
    firstName: firstName,
    lastName: lastName,
    aboutMe: aboutMe,
    gender: gender,
    age: age,
    degree: degree,
    facebook: facebook,
    phone: phone
  };
  // Save Students in the database
  Student.create(student)
    .then(data => {
      //create studOpenDets------------------------------------------------------
      const studentEmail = req.body.studentDetails.email;
      var { email, facebook, phone } = opendets;
      var { picture, openText } = opendets;
      const studOpenDets = {
        studentEmail: studentEmail,
        email: email == 1 ? email : 0,
        facebook: facebook == 1 ? facebook : 0,
        phone: phone == 1 ? phone : 0,
        picture: picture == 1 ? picture : 0,
        openText: openText == 1 ? openText : 0
      }
      StudOpenDets.create(studOpenDets)
        .then(data => {
          // res.send(data);
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while creating the studOpenDets."
          });
        });
      // create studOpenByMatches--------------------------------------------------
      var { email, facebook, phone, picture, openText } = matchdets;
      const studOpenByMatches = {
        studentEmail: studentEmail,
        email: email == 1 ? email : 0,
        facebook: facebook == 1 ? facebook : 0,
        phone: phone == 1 ? phone : 0,
        picture: picture == 1 ? picture : 0,
        openText: openText == 1 ? openText : 0
      }
      StudOpenByMatches.create(studOpenByMatches)
        .then(data => {
          // res.send(data);
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while creating the studOpenDets."
          });
        });
      res.send(data);
    })
    .catch(err => { //catching the students table error
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the student."
      });
    });
};
//TODO
// function createHelper(rBody, tableName, dbTable){
//   const { email, facebook, phone, picture, openText } = rBody.tableName;
//   const ${tableName} = {
//     email: email == 1 ? email : 0,
//     facebook: facebook == 1 ? facebook : 0,
//     phone: phone == 1 ? phone : 0,
//     picture: picture == 1 ? picture : 0,
//     openText: openText == 1 ? openText : 0
//   }
//   ${dbTable}.create(${tableName})
//   .then(data => {
//     res.send(data);
//   })
//   .catch(err => {
//     res.status(500).send({
//       message:
//         err.message || "Some error occurred while creating the studOpenDets."
//     });
//   });
// }

// Retrieve all Students from the database.
exports.findAll = (req, res) => {
  const email = req.query.email;
  var condition = email ? { email: email } : undefined;
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

async function returnLegalData(tableName, email, res) {
  return Student.findByPk(email)
    .then((studentData) => {
      return tableName.findAll({ where: { studentEmail: email }, raw: true })
        .then((confirmationTable) => {
          const ans = {
            email: confirmationTable[0].email == 1 ? studentData.email : undefined,
            facebook: confirmationTable[0].facebook == 1 ? studentData.facebook : undefined,
            phone: confirmationTable[0].phone == 1 ? studentData.phone : undefined,
            // picture: confirmationTable.picture == 1 ? studentData.picture : "", //TODO
            aboutMe: confirmationTable[0].openText == 1 ? studentData.aboutMe : undefined
          }
          //res.send(ans);
          return JSON.stringify(ans);
        })
        .catch(err => {
          // res.status(500).send({
          //   message: "Error retrieving table data with email=" + email
          // });
        });
    })
    .catch(err => {
      console.log("[server error] in returnLegalData");
      res.status(500).send({
        message: "Error(returnLegalData) retrieving Student with email=" + email
      });
      return undefined;
    });
}
/**
 * Validates whether a value is included in a list.
 * @returns JSON object, returns the data in each field if the data is allowed to be shown , else retrieves UNDEFINED value in the field
 */
exports.matchDets = (req, res) => {
  const email = req.params.email;
  const final = returnLegalData(StudOpenByMatches, email, res);
  final.then(ans => {
    res.send(ans);
  })
    .catch(err => {
      res.status(500).send({
        message: "Error(matchDets) retrieving Student with email=" + email
      });
    })

}
/**
 * Validates whether a value is included in a list.
 * @returns JSON object, returns the data in each field if the data is allowed to be shown , else retrieves UNDEFINED value in the field
 */
exports.openDets = (req, res) => {
  const email = req.params.email;
  const final = returnLegalData(StudOpenDets, email, res);
  final.then(ans => {
    res.send(ans);
  })
    .catch(err => {
      res.status(500).send({
        message: "Error(StudOpenDets) retrieving Student with email=" + email
      });
    })
}

