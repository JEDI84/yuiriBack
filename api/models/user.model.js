const { DataTypes } = require("sequelize");
const { sequelize } = require("../../database/index.js");

const User = sequelize.define(
  "user",
  {
    username: {
      type: DataTypes.STRING,
      len: [2, 10],
  },
    last_name: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
    },
    
  },
  {
    updateAt: false,
  }
);

module.exports = User;
