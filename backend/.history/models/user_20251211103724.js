const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: false
  },
  email: {
    type: String,
    required: true,
  },
  mobileNumber: {
    type: String,
    required: false,
  },
  password: {
    type: String,

  },
});

module.exports = mongoose.model("User", UserSchema);
