//  import the sequalize constructor from the library
const Sequelize = require("sequelize");
require("dotenv").config();

// create connection to our database, pass in your MySQL information for username and password
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  "1100",
  {
    host: "localhost",
    dialect: "mysql",
    port: 3306,
  }
);
module.exports = sequelize;
