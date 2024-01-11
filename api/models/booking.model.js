const { DataTypes } = require('sequelize');
const { sequelize } = require("../../database/index.js"); 

const Booking = sequelize.define('booking',
  {
    status: {
      type: DataTypes.ENUM("occupied", "free"),
      allowNull: false,
      defaultValue: "free",
    },
    message: {
      type: DataTypes.STRING,
    },
    userId: {
      type: DataTypes.INTEGER,
    },
  },
  {
    createdAt: false,
  }
);

module.exports = Booking;
