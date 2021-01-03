
module.exports = (sequelize, Sequelize) => {
  const StudOpenByMatch = sequelize.define("studOpenByMatch", {

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
  // StudOpenByMatch.removeAttribute('id');
  return StudOpenByMatch;
};