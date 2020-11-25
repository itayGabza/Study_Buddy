
module.exports = (sequelize, Sequelize) => {
    const Students = sequelize.define("students", {
      email: {
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      },    
      password: {
        type: Sequelize.STRING
      },
      gender: {
        type: Sequelize.STRING
      },
      age: {
        type: Sequelize.INTEGER
      },
      degree: {
        type: Sequelize.STRING
      }
      //timestamps: false  //canceling the auto function of createdAT and updatedAt
    });
  
    return Students;
  };