const Sequelize = require("sequelize");
<<<<<<< HEAD
require("dotenv").config();
//  import the sequelize constructor from the library
let sequelize;
if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
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
}
=======

require("dotenv").config();

// create connection to our db
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
      host: "localhost",
      dialect: "mysql",
      port: 3306,
    });

>>>>>>> dev
module.exports = sequelize;
