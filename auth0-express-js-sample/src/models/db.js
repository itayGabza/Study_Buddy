const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,


  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.tutorials = require("./tutorial.model.js")(sequelize, Sequelize);
db.students = require("./students.model.js")(sequelize, Sequelize);
db.courses = require("./courses.model.js")(sequelize, Sequelize);
db.detailsToShow = require("./detailsToShow.model.js")(sequelize, Sequelize);
db.requests = require("./requests.model.js")(sequelize, Sequelize);
db.reqAv = require("./reqAv.model.js")(sequelize, Sequelize);
db.studentCourses = require("./studentCourses.model.js")(sequelize, Sequelize);

db.students.hasMany(db.requests, {as : "requests"});
db.requests.belongsTo(db.students, {
  foreignKey: "email",
  as: "student",
});


module.exports = db;