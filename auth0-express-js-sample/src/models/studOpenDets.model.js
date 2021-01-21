
module.exports = (sequelize, Sequelize) => {
  const Sod = sequelize.define("studOpenDets", {

    openText: {
      type: Sequelize.INTEGER
    },
    phone: {
      type: Sequelize.INTEGER
    },
    email: {
      type: Sequelize.INTEGER
    },
    facebook: {
      type: Sequelize.INTEGER
    },
    picture: {
      type: Sequelize.INTEGER  //TODO to correct!!!!
    },
    studentEmail: {
      type: Sequelize.STRING,
      unique: true
    }
  }, { timestamps: false });

  Sod.removeAttribute('id');
  return Sod;
};