
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
      defaultValue: "just a nice student"
    },
    gender: {
      type: Sequelize.STRING,
      defaultValue: "dont want to say ;) "
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