
module.exports = (sequelize, Sequelize) => {
  const Requests = sequelize.define("requests", {
    // DT: {
    //   type: Sequelize.DATE,  //TODO add day time!!!
    //   primaryKey: true
    // },
    // email: {
    //   type: Sequelize.STRING,
    //   primaryKey: true
    // },    
    course: {
      type: Sequelize.STRING
    },
    studyMethod: {
      type: Sequelize.STRING
    },
    studyingFor: {
      type: Sequelize.STRING
    },
    groupSize: {
      type: Sequelize.STRING
    },
    studyLevel: {
      type: Sequelize.STRING
    },
    studyTime: {
      type: Sequelize.STRING
    },
    studyGender: {
      type: Sequelize.STRING
    },
  });
  // Requests.removeAttribute('id');
  return Requests;
};