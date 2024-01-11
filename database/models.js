
const User = require("../api/models/user.model");
const Booking = require("../api/models/booking.model");
const Location = require("../api/models/location.model");
const Admin = require("../api/models/admin.model");

function addRelationsToModels() {
  try {
    User.hasMany(Booking);
    Booking.belongsTo(User);

    Admin.hasMany(Booking);
    Booking.belongsTo(Admin);

    Booking.hasOne(Location);
    Location.belongsTo(Booking);

    Admin.hasMany(Booking);
    Booking.belongsTo(Admin);

    Admin.hasMany(User);
    User.belongsTo(Admin);

    console.log("Relations added to all models");
  } catch (error) {
    throw error;
  }
}

module.exports = { addRelationsToModels };
