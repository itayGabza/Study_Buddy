
module.exports = (sequelize, Sequelize) => {
  const Students = sequelize.define("students", {
    email: {
      type: Sequelize.STRING,
      primaryKey: true
    },
    firstName: {
      type: Sequelize.STRING
    },
    lastName: {
      type: Sequelize.STRING
    },
    aboutMe: {
      type: Sequelize.STRING,
      defaultValue: "default value, did not enter any about"
    },
    gender: {
      type: Sequelize.STRING,
      defaultValue: "default value, did not enter any gender"
    },
    age: {
      type: Sequelize.INTEGER,
      defaultValue: "-1"
    },
    degree: {
      type: Sequelize.STRING
    },
    facebook: {
      type: Sequelize.STRING,
      defaultValue: "-1"
    },
    phone: {
      type: Sequelize.STRING,
      defaultValue: "-1"
    }
  }, { timestamps: false });
  Students.removeAttribute('id');
  return Students;
};