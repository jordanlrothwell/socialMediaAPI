const { Schema, Types } = require("mongoose");
const validateEmail = require("../utils/validateEmail");

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
    validate: [validateEmail, `Please fill a valid email address`],
  },
});
