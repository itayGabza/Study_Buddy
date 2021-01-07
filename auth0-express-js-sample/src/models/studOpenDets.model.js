
module.exports = (sequelize, Sequelize) => {
  const Sod = sequelize.define("studOpenDets", {

    openText: {
      type: Sequelize.STRING
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
    }
  }, { timestamps: false });

  Sod.removeAttribute('id');
  return Sod;
};