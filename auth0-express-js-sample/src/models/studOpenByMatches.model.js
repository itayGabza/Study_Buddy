
module.exports = (sequelize, Sequelize) => {
  const StudOpenByMatches = sequelize.define("studOpenByMatches", {

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

  StudOpenByMatches.removeAttribute('id');

  return StudOpenByMatches;
};