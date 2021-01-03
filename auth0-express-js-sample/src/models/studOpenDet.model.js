
module.exports = (sequelize, Sequelize) => {
  const Sod = sequelize.define("studOpenDet", {

    openText: {
      type: Sequelize.STRING
    },
    whatsapp: {
      type: Sequelize.INTEGER
    },
    email: {
      type: Sequelize.STRING
    },
    facebook: {
      type: Sequelize.STRING
    },
    picture: {
      type: Sequelize.STRING  //TODO to correct!!!!
    }
  }, { timestamps: false });
  Sod.removeAttribute('id');
  return Sod;
};