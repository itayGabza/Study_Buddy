
module.exports = (sequelize, Sequelize) => {
    const Dts = sequelize.define("detailsToShow", {
      email: {
        type: Sequelize.STRING,
        primaryKey: true
      },
      gender: {
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
    }, {timestamps: false});
    Dts.removeAttribute('id');
    return Dts;
  };