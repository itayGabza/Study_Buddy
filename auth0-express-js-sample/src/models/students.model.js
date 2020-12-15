
module.exports = (sequelize, Sequelize) => {
    const Students = sequelize.define("students", {
      email: {
        type: Sequelize.STRING,
        primaryKey: true
      },
      name: {
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
      }
    }, {timestamps: false});
    Students.removeAttribute('id');
    return Students;
  };