
module.exports = (sequelize, Sequelize) => {
  const Degrees = sequelize.define("degrees", {
    degree: {
      type: Sequelize.STRING,
      primaryKey: true
    },
    faculty: {
      type: Sequelize.STRING,
    }
  }, { timestamps: false });

  Degrees.removeAttribute('id');
  return Degrees;
};