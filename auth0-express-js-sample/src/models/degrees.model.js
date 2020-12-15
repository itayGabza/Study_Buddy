
module.exports = (sequelize, Sequelize) => {
    const Degrees = sequelize.define("degrees", {
      degree: {
        type: Sequelize.STRING,
        primaryKey: true
      },
      faculty: {
        type: Sequelize.STRING,
      }    
    }, { timestamps: false} );

    StudentCourses.removeAttribute('id');
    return Degrees;
  };