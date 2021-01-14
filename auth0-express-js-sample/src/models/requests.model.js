
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
      type: Sequelize.INTEGER.UNSIGNED
    },
    studyLevel: {
      type: Sequelize.STRING
    },
    studyTime: {
      type: Sequelize.STRING
    },
    myGender: {
      type: Sequelize.STRING
    },
    reqGender: {
      type: Sequelize.STRING
    },
    headLine: {
      type: Sequelize.STRING
    },
    reqDescription: {
      type: Sequelize.STRING
    },
    creationTime: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW
    },
    studentEmail: {
      type: Sequelize.STRING
    }
  }, { timestamps: false });
  // Requests.removeAttribute('id');
  return Requests;
};