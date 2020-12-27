const db = require("../models/db.js");
const Requests = db.requests;
const Students = db.students;

const Op = db.Sequelize.Op;

// Create and Save a new Request
// Create a request
exports.create = (req, res) => {
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
  const objective = req.query.objective;
  const gender = req.query.gender;
  const level = req.query.level;
  const location = req.query.location;
  const when = req.query.when;
  const size = req.query.size;

  // input checks
  objectiveOptions = ["homeWork", "test", "other"];
  genderOptions = ["male", "female", "mix"];
  levelOptions = ["good", "medium", "bad"];
  locationOptions = ["zoom", "frontal", "other"];
  whenOptions = ["morning", "noon", "afterNoon", "evening", "night"];
  sizeOptions = ["2", "3", "4", "5Plus"];

  objective ? !objectiveOptions.includes(objective) ? console.log("[server error] --- wrong parameters for objectives in filters function (requests)")
    : console.log() : objective = objectiveOptions;
  gender ? !genderOptions.includes(gender) ? console.log("[server error] --- wrong parameters for gender in filters function (requests)")
    : console.log() : gender = genderOptions;
  level ? !levelOptions.includes(level) ? console.log("[server error] --- wrong parameters for level in filters function (requests)")
    : console.log() : level = levelOptions;
  location ? !locationOptions.includes(location) ? console.log("[server error] --- wrong parameters for location in filters function (requests)")
    : console.log() : location = locationOptions;
  when ? !whenOptions.includes(when) ? console.log("[server error] --- wrong parameters for when in filters function (requests)")
    : console.log() : when = whenOptions;
  size ? !sizeOptions.includes(size) ? console.log("[server error] --- wrong parameters for size in filters function (requests)")
    : console.log() : size = sizeOptions;

  // input checks end


  Tutorial.findAll({
    where: {
      [Op.and]: [
        { studyingFor: objective },
        { groupSize: size },
        { studyMethod: location },
        { studyLevel: level },
        { studyTime: when },
        { studyGender: gender }
      ]
    }
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
