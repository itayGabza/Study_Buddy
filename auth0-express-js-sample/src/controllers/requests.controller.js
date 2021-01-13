const db = require("../models/db.js");
const Requests = db.requests;
const Students = db.students;

const Op = db.Sequelize.Op;

const studyingForOptions = ["homeWork", "test", "exam", "assignment", "other"];
const genderOptions = ["male", "female", "mix"];
const studyLevelOptions = ["good", "medium", "bad"];
const studyMethodOptions = ["zoom", "frontal", "other"];
const studyTimeOptions = ["morning", "noon", "afterNoon", "evening", "night"];
const groupSizeOptions = ["2", "3", "4", "5Plus"];
const courseOptions = ["math", "history", "physics", "english", "grammer"];

/**
 * Validates whether a value is included in a list.
 * @returns value itself if exists, or fallbackValue if not
 */
function validator(value, list, fallbackValue, forwho) {
  if (list.includes(value)) {
    console.log(`${[list[value]]} found`)
    return value;
  }
  else {
    console.log(`[server error] --- wrong parameters for ${[list]} in filters function (${[list]})`);
    return fallbackValue ? fallbackValue : list

  }
}

function validateFiltersData(data) {
  return {
    myGender: validator(data.myGender, genderOptions),
    studyingFor: validator(data.studyingFor, studyingForOptions),
    course: validator(data.course, courseOptions),
    studyMethod: validator(data.studyMethod, studyMethodOptions),
    studyLevel: validator(data.studyLevel, studyLevelOptions),
    groupSize: validator(data.groupSize, groupSizeOptions),
    studyTime: validator(data.studyTime, studyTimeOptions),
  }
}

function validateCreateData(data) {
  return {
    course: validator(data.course, courseOptions, "math"),
    studyMethod: validator(data.studyMethod, studyMethodOptions, "zoom"),
    studyingFor: validator(data.studyingFor, studyingForOptions, "exam"),
    groupSize: validator(data.groupSize, groupSizeOptions, 2),
    studyLevel: validator(data.studyLevel, studyLevelOptions, "medium"),
    studyTime: validator(data.studyTime, studyTimeOptions, "evening"),
    reqGender: validator(data.reqGender, genderOptions, "mix"),
    // headLine: validator(data.headLine, headLineOptions),
    // reqDescription: validator(data.reqDescription, reqDescriptionOptions),
    // studentEmail: validator(data.studentEmail, studentEmailOptions),
  };

  return res;
}
// Create and Save a new Request
// Create a request
exports.create = (req, res) => {

  const { studentEmail, headLine, reqDescription } = req.body;
  const { course, studyMethod, studyingFor, groupSize, studyLevel, studyTime, reqGender } = validateCreateData(req.body);
  //pulling gender from the students data by its email
  var myGender = "-1";

  const findByPk = Students.findByPk(studentEmail) //TODO - why is there return here
    .then((data) => {
      myGender = data.gender;
      return myGender;

    })
    .catch(err => {
      res.status(500).send({
        message: "[server error] ------ Error retrieving Student gender at 'create request'" + myGender
      });
      return undefined;
    });

  findByPk.then(myGender => {
    console.log("sss");
    const request = {
      course,
      studyMethod,
      studyingFor,
      groupSize,
      mygender,
      reqGender,
      studyLevel,
      studyTime,
      headLine,
      reqDescription,
      studentEmail
    };
    console.log("sasdsadss");

    // Save Students in the database
    Requests.create(request)
      .then(data => {
        console.log("got here444");

        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "[server error] ---- Some error occurred while creating request"
        });
        return;
      });
  })
    .catch(err => {
      res.status(500).send({
        message: "[server error] ------ Error at creating new request " + myGender
      });
      return undefined;
    });
};


exports.update = (req, res) => {
  const email = req.params.email;
  const id = req.params.id;

  console.log("updating request"); //TODO printing comment
  Requests.update(req.body, {
    where: { email: email }
  })
    .then(res.send({
      message: `updated the request`
    }))
    .catch(err => {
      res.status(500).send({
        message: "Error updating request with email=" + email
      });
    });
};

// Retrieve all Requests from the database.
exports.findAll = (req, res) => {
  const title = req.query.title; //TODO
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
  const email = req.params.email; //TODO

  Requests.findAll({ where: { studentEmail: email } })
    .then(data => {
      if (Array.isArray(data))
        res.send(data);
      else
        res.send([data])
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving specific student Requests (findAllByStudent)"
      });
    });
};

// Find all Requests with the conditions 
exports.filters = (req, res) => {
  const results = validateFiltersData(req.query);
  console.log("results", results);
  const { myGender, course, studyMethod, studyingFor, groupSize, studyTime, studyLevel } = results;
  Requests.findAll({
    where: {
      myGender,
      course,
      studyMethod,
      studyingFor,
      groupSize,
      studyTime,
      studyLevel
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
