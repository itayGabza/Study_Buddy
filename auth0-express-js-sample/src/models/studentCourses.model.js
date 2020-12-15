
module.exports = (sequelize, Sequelize) => {
    const StudentCourses = sequelize.define("studentCourses", {
      email: {
        type: Sequelize.STRING,
        primaryKey: true
      },
      course: {
        type: Sequelize.STRING,
        primaryKey: true
      }    
    }, { timestamps: false} );

    StudentCourses.removeAttribute('id');
    return StudentCourses;
  };