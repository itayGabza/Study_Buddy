const db = require("../models/db.js");
const Requests = db.requests;
const Students = db.students;

const Op = db.Sequelize.Op;

// Create and Save a new Request
// Create a request
exports.create = (req, res) => {

  newReq = inputCheck(req, "create");

  console.log("newReq email is ", newReq.studentEmail);
  //pulling gender from the students data by its email
  var gender = "male";

  Students.findOne = (req, res) => {
    return Student.findByPk(req.studentEmail)
      .then((data) => {
        gender = data.gender;
      })
      .catch(err => {
        res.status(500).send({
          message: "[server error] ------ Error retrieving Student gender at 'create request'" + gender
        });
      });
  };

  const request = {
    course: newReq.course,
    studyMethod: newReq.studyMethod,
    studyingFor: newReq.studyingFor,
    groupSize: newReq.groupSize,
    studyTime: newReq.studyTime,
    studyLevel: newReq.studyLevel,
    studyGender: gender,
    studentEmail: newReq.studentEmail
  };
  // Save Students in the database
  Requests.create(request)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "[server error] ---- Some error occurred while creating request"
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

  Students.findByPk(email, { include: ["requests"] })
    .then((data) => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Requests with email=" + email
      });
    });
};

// Find all Requests with the conditions
exports.filters = (req, res) => {

  req = inputCheck(req, "filters"); //checks and corrects the inputs to make the query correct

  Requests.findAll({
    where: {
      course: req.course,
      studyingFor: req.studyingFor,
      groupSize: req.groupSize,
      studyMethod: req.studyMethod,
      studyLevel: req.studyLevel,
      studyGender: req.studyGender,
      studyTime: req.studyTime
    },
  })
    .then(data => {
      if (Array.isArray(data))
        res.send(data);
      else
        res.send([data])
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "[server error] ---- problems when retrieving filtered request."
      });
    });
};



function inputCheck(req, whoCalls) {

  const objectiveOptions = ["homeWork", "test", "exam", "assignment", "other"];
  const genderOptions = ["male", "female", "mix"];
  const levelOptions = ["good", "medium", "bad"];
  const locationOptions = ["zoom", "frontal", "other"];
  const whenOptions = ["morning", "noon", "afterNoon", "evening", "night"];
  const sizeOptions = [2, 3, 4, "5Plus"];
  const courseOptions = ["math", "history", "physics", "english", "grammer"];

  var res = {};

  if (whoCalls == 'filters') {
    var objective = req.query.objective;
    var gender = req.query.gender;
    var level = req.query.level;
    var location = req.query.location;
    var when = req.query.when;
    var size = req.query.size;
    var email = req.query.email;
    var course = req.query.course;

    objective ? !objectiveOptions.includes(objective) ? console.log("[server error] --- wrong parameters for objectives in filters function (requests)")
      : console.log("objective found") : objective = objectiveOptions;
    gender ? !genderOptions.includes(gender) ? console.log("[server error] --- wrong parameters for gender in filters function (requests)")
      : console.log("gender found") : gender = genderOptions;
    level ? !levelOptions.includes(level) ? console.log("[server error] --- wrong parameters for level in filters function (requests)")
      : console.log("level found") : level = levelOptions;
    location ? !locationOptions.includes(location) ? console.log("[server error] --- wrong parameters for location in filters function (requests)")
      : console.log("location found") : location = locationOptions;
    when ? !whenOptions.includes(when) ? console.log("[server error] --- wrong parameters for when in filters function (requests)")
      : console.log("when request found") : when = whenOptions;
    size ? !sizeOptions.includes(size) ? console.log("[server error] --- wrong parameters for size in filters function (requests)")
      : console.log("size request found") : size = sizeOptions;
    course ? !courseOptions.includes(course) ? console.log("[server error] --- wrong parameters for course in filters function (requests)")
      : console.log("course request found") : course = courseOptions;

    res = {
      course: course,
      studyMethod: location,
      studyingFor: objective,
      groupSize: size ? size : 2,
      studyTime: when,
      studyGender: gender,
      studyLevel: level,
      studentEmail: email //TODO figure out the EMAIL
    };
  }


  if (whoCalls == 'create') {
    console.log("recieved email is ", req.body.studentEmail);
    res = {
      course: courseOptions.includes(req.body.course) ? req.body.course : "math",
      studyMethod: locationOptions.includes(req.body.location) ? req.body.location : "zoom",
      studyingFor: objectiveOptions.includes(req.body.objective) ? req.body.objective : "exam",
      groupSize: sizeOptions.includes(req.body.size) ? req.body.size : 2,
      studyTime: whenOptions.includes(req.body.when) ? req.body.when : "evening",
      // studyGender: genderOptions.includes(req.gender)? req.gender: "male",     //not needed because the gender is being extracted from the students table
      studyLevel: levelOptions.includes(req.body.level) ? req.body.level : "medium",
      studentEmail: req.body.studentEmail //TODO figure out the EMAIL check
    };
  }

  return res;
}


