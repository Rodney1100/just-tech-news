const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
const crypt = require("bcrypt");
//  Create user model
class User extends Model {}

// Define table columns and configuration
User.init(
  {
    // TABLE COLUMN DEFINITIONS GO HERE
    id: {
      // use the special sequelize datatype object provide what type of data it is
      type: DataTypes.INTEGER,
      // this is the equivilate of sql's not null
      allowNull: false,
      // instruct that this is the primary key
      primaryKey: true,
      // turn on auto incramant
      autoIncrement: true,
    },
    // define username column
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      // there cannot be any duplicate email values in this table
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    // define password column
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        // this means the password must be at least four characters long
        len: [4],
      },
    },
  },
  {
    hooks: {
      // set up beforeCreate lieCycle 'hook' fuctoinality
      beforeCreate(userData) {
        console.log(userData);
        return bcrypt.hash(userData.password, 10).then((newUserData) => {
          return newUserData;
        });
      },
    },

    // pass in our imported sequelize connection (the direct connection to our database)
    sequelize,
    // don't automatically create createdAt/updatedAt timestamp fields
    timestamps: false,
    // don't pluralize name of database table
    freezeTableName: true,
    // use underscores instead of camel-casing (i.e. `comment_text` and not `commentText`)
    underscored: true,
    // make it so our model name stays lowercase in the database
    modelName: "user",
  }
);
module.exports = User;
