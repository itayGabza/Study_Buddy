
module.exports = (sequelize, Sequelize) => {
  const StudOpenByMatches = sequelize.define("studOpenByMatches", {

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
  // StudOpenByMatch.removeAttribute('id');

  return StudOpenByMatches;
};