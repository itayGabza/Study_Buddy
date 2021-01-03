
module.exports = (sequelize, Sequelize) => {
  const Students = sequelize.define("students", {
    email: {
      type: Sequelize.STRING,
      primaryKey: true
    },
    name: {
      type: Sequelize.STRING
    },
    lastName: {
      type: Sequelize.STRING
    },
    password: {
      type: Sequelize.STRING
    },
    gender: {
      type: Sequelize.STRING
    },
    age: {
      type: Sequelize.INTEGER
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