const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
  },
  email: {
    type: String,
    required: true,
  },
  mobileNumber: {
    type: String,
  },
  password: {
    type: String,
   
  },
});

module.exports = mongoose.model("User", UserSchema);
