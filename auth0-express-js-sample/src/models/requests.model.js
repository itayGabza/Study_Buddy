
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
    gender: {
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
    }
  }, { timestamps: false });
  // Requests.removeAttribute('id');
  //  myDate: { type: Sequelize.DATE, defaultValue: Sequelize.NOW },
  return Requests;
};