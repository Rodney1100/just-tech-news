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
  module.exports = sequelize;
}
