const db = require("../models/db.js");
const Requests = db.requests;
const Students = db.students;

const Op = db.Sequelize.Op;

// Create and Save a new Request
// Create a request
exports.create = (req, res) => {

  newReq = inputCheck(req, "create");

  console.log("newReq email is ", newReq.studentEmail); //TODO
  //pulling gender from the students data by its email
  var gender = "-1";

  Students.findByPk(newReq.studentEmail) //TODO - why is there return here
    .then((data) => {
      gender = data.gender;
      console.log("user gender = ", gender);
    })
    .catch(err => {
      res.status(500).send({
        message: "[server error] ------ Error retrieving Student gender at 'create request'" + gender
      });
    });
  console.log("user gender after loop = ", gender);

  const request = {
    course: newReq.course,
    studyMethod: newReq.studyMethod,
    studyingFor: newReq.studyingFor,
    groupSize: newReq.groupSize,
    gender: gender,
    studyLevel: newReq.studyLevel,
    studyTime: newReq.studyTime,
    headLine: newReq.headLine,
    reqDescription: newReq.reqDescription,
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
      studyMethod: req.studyMethod,
      studyingFor: req.studyingFor,
      groupSize: req.groupSize,
      gender: req.gender,
      studyLevel: req.studyLevel,
      studyTime: req.studyTime,

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

  const studyingForOptions = ["homeWork", "test", "exam", "assignment", "other"];
  const genderOptions = ["male", "female", "mix"];
  const levelOptions = ["good", "medium", "bad"];
  const studyMethodOptions = ["zoom", "frontal", "other"];
  const studyTimeOptions = ["morning", "noon", "afterNoon", "evening", "night"];
  const sizeOptions = ["2", "3", "4", "5Plus"];
  const courseOptions = ["math", "history", "physics", "english", "grammer"];

  var res = {};

  if (whoCalls == 'filters') {
    var studyingFor = req.query.studyingFor;
    var gender = req.query.gender;
    var studyLevel = req.query.studyLevel;
    var studyMethod = req.query.studyMethod;
    var studyTime = req.query.studyTime;
    var groupSize = req.query.groupSize;
    var course = req.query.course;

    studyingFor ? !studyingForOptions.includes(studyingFor) ? console.log("[server error] --- wrong parameters for studyingFor in filters function (requests)")
      : console.log("studyingFor found") : studyingFor = studyingForOptions;
    gender ? !genderOptions.includes(gender) ? console.log("[server error] --- wrong parameters for gender in filters function (requests)")
      : console.log("gender found") : gender = genderOptions;
    studyLevel ? !levelOptions.includes(studyLevel) ? console.log("[server error] --- wrong parameters for studyLevel in filters function (requests)")
      : console.log("studyLevel found") : studyLevel = levelOptions;
    studyMethod ? !studyMethodOptions.includes(studyMethod) ? console.log("[server error] --- wrong parameters for studyMethod in filters function (requests)")
      : console.log("studyMethod found") : studyMethod = studyMethodOptions;
    studyTime ? !studyTimeOptions.includes(studyTime) ? console.log("[server error] --- wrong parameters for studyTime in filters function (requests)")
      : console.log("studyTime request found") : studyTime = studyTimeOptions;
    groupSize ? !sizeOptions.includes(groupSize) ? console.log("[server error] --- wrong parameters for groupSize in filters function (requests)")
      : console.log("groupSize request found") : groupSize = sizeOptions;
    course ? !courseOptions.includes(course) ? console.log("[server error] --- wrong parameters for course in filters function (requests)")
      : console.log("course request found") : course = courseOptions;

    res = {
      course: course,
      studyMethod: studyMethod,
      studyingFor: studyingFor,
      groupSize: groupSize ? groupSize : 2,
      gender: gender,
      studyLevel: studyLevel,
      studyTime: studyTime,
    };
  }


  if (whoCalls == 'create') {

    res = {
      course: courseOptions.includes(req.body.course) ? req.body.course : "math",
      studyMethod: studyMethodOptions.includes(req.body.studyMethod) ? req.body.studyMethod : "zoom",
      studyingFor: studyingForOptions.includes(req.body.studyingFor) ? req.body.studyingFor : "exam",
      groupSize: sizeOptions.includes(req.body.groupSize) ? req.body.groupSize : 2,
      studyLevel: levelOptions.includes(req.body.studyLevel) ? req.body.studyLevel : "medium",
      studyTime: studyTimeOptions.includes(req.body.studyTime) ? req.body.studyTime : "evening",
      headLine: req.body.headLine, //TODO add verification input checks
      reqDescription: req.body.reqDescription, //TODO add verification input checks
      studentEmail: req.body.studentEmail //TODO figure out the EMAIL check
    };
  }

  return res;
}


