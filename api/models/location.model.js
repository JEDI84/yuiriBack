const { DataTypes } = require("sequelize");
const { sequelize } = require("../../database/index.js");

const Location = sequelize.define(
  "location",
  {
    location_name: {
      type: DataTypes.STRING,
    },
  },
  {
    updatedAt: false,
    createdAt: false,
  }
);

module.exports = Location;
