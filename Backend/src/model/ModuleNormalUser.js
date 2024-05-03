const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");

const signupSchema = new mongoose.Schema({
  fullName: {
    type: String,
  },
  type: {
    type: String,
  },
  emailAddress: {
    type: String,
  },
  password: {
    type: String,
  },
  dateOfBirth: {
    type: Date,
  },
  ordinaryPlaceOfWorking: {
    type: String,
  },
  district: {
    type: String,
  },
  state: {
    type: String,
  },
  mobile: {
    type: String,
  },
  aadhar: {
    type: String,
  },
  barNumber: {
    type: String,
  },
  pincode: {
    type: String,
  },
  gender: {
    type: String,
  },
});

// Hash password before saving to database
signupSchema.pre("save", async function (next) {
  const user = this;
  if (!user.isModified("password")) return next();
  try {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(user.password, salt);
    user.password = hash;
    next();
  } catch (error) {
    return next(error);
  }
});

const UserSignup = mongoose.model("UserSignup", signupSchema);

module.exports = UserSignup;
