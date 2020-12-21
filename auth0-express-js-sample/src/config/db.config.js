const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  HOST: "us-cdbr-east-02.cleardb.com",
  USER: "b78a75434af81f",
  PASSWORD: process.env.DB_PASSWORD,
  DB: "heroku_b9eb955d3d8dd77",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
