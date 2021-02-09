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
}, {
  define: {
    freezeTableName: true
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.tutorials = require("./tutorial.model.js")(sequelize, Sequelize);
db.students = require("./students.model.js")(sequelize, Sequelize);
db.courses = require("./courses.model.js")(sequelize, Sequelize);
db.degrees = require("./degrees.model.js")(sequelize, Sequelize);
db.studOpenDets = require("./studOpenDets.model.js")(sequelize, Sequelize);
db.requests = require("./requests.model.js")(sequelize, Sequelize);
db.reqAv = require("./reqAv.model.js")(sequelize, Sequelize);
db.studOpenByMatches = require("./studOpenByMatches.model.js")(sequelize, Sequelize);

db.students.hasMany(db.requests, { as: "requests" });
db.requests.belongsTo(db.students, {  // requests has a foreign key from Students
  foreignKey: "studentEmail", //the foreign key will be in colomn named "studentEmail"
  as: "students",  //when wanting to include it in answers we will use the shortcut students
  onDelete: 'CASCADE',
});

db.students.hasMany(db.studOpenDets, { as: "studOpenDets" });
db.studOpenDets.belongsTo(db.students, {
  foreignKey: "studentEmail",
  as: "students",
  onDelete: 'CASCADE',
});

db.students.hasMany(db.studOpenByMatches, { as: "studOpenByMatches" });
db.studOpenByMatches.belongsTo(db.students, {
  foreignKey: "studentEmail",
  as: "students",
  onDelete: 'CASCADE',
});

db.degrees.hasMany(db.courses, { as: "courses" });
db.courses.belongsTo(db.degrees, {
  foreignKey: "degrees",
  as: "Degree",
  onDelete: 'CASCADE',
});

module.exports = db;