
module.exports = (sequelize, Sequelize) => {
  const Courses = sequelize.define("courses", {
    degree: {
      type: Sequelize.STRING,
      foreignKey: true
    },
    courseID: {
      type: Sequelize.STRING,
      primaryKey: true
    },
    courseName: {
      type: Sequelize.STRING
    },
  }, { timestamps: false }
  );
  Courses.removeAttribute('id');
  return Courses;
};