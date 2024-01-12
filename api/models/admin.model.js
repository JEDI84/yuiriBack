const { DataTypes } = require("sequelize");
const { sequelize } = require("../../database/index.js");

const Admin = sequelize.define(
  "admin",
  {
    username: {
      type: DataTypes.STRING,
    },
    last_name: {
      type: DataTypes.STRING,
    },
    role: {
      type: DataTypes.STRING,
      defaultValue: "admin",
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
    },
    telephone_number: {
      type: DataTypes.INTEGER,
    },
    password: {
      type: DataTypes.STRING,
    },
  },
  {
    updatedAt: false,
    createAt: false,
  }
);

module.exports = Admin;
