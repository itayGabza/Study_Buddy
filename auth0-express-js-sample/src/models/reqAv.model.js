
module.exports = (sequelize, Sequelize) => {
    const ReqAv = sequelize.define("reqAv", {
      DT: {
        type: Sequelize.DATE,
        primaryKey: true
      },
      email: {
        type: Sequelize.DATE,
        primaryKey: true
      },    
      startTime: {
        type: Sequelize.STRING
      },
      endTime: {
        type: Sequelize.STRING
      },
    });
    ReqAv.removeAttribute('id');
    return ReqAv;
  };