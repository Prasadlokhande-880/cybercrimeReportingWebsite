const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const caseSchema = new mongoose.Schema({
  courtType: {
    type: String,
  },
  UserEmail:{
    type: String,
  },
  isScheduled: {
    type: Boolean,
    default: false,
  },
  courtID: {
    type: String,
  },
  caseDetails: {
    caseDescription: {
      type: String,
    },
    mainDistrict: {
      type: String,
    },
    establishment: {
      type: String,
    },
    natureOfCase: {
      type: String,
    },
    reliefSought: {
      type: String,
    },
    caseType: {
      type: String,
    },
    plaintiff: {
      type: String,
    },
    contactNumber: {
      type: String,
    },
  },
  petitioner: {
    name: {
      type: String,
    },
    gender: {
      type: String,
    },
    relation: {
      type: String,
    },
    dateOfBirth: {
      type: Date,
    },
    age: {
      type: Number,
    },
    caseDetails: {
      type: String,
    },
    extraName: {
      type: String,
    },
    email: {
      type: String,
    },
    occupation: {
      type: String,
    },
    mobileNumber: {
      type: String,
    },
    pinCode: {
      type: String,
    },
    address: {
      type: String,
    },
    state: {
      type: String,
    },
    district: {
      type: String,
    },
    taluka: {
      type: String,
    },
    village: {
      type: String,
    },
  },
  responder: {
    name: {
      type: String,
    },
    gender: {
      type: String,
    },
    relation: {
      type: String,
    },
    dateOfBirth: {
      type: Date,
    },
    age: {
      type: Number,
    },
    caseDetails: {
      type: String,
    },
    extraName: {
      type: String,
    },
    email: {
      type: String,
    },
    occupation: {
      type: String,
    },
    mobileNumber: {
      type: String,
    },
    pinCode: {
      type: String,
    },
    address: {
      type: String,
    },
    state: {
      type: String,
    },
    district: {
      type: String,
    },
    taluka: {
      type: String,
    },
    village: {
      type: String,
    },
  },
  causeOfAction: {
    type: String,
  },
  causeOfActionDate: {
    type: Date,
  },
  importantInformation: {
    type: String,
  },
  prayer: {
    type: String,
  },
  valuation: {
    type: String,
  },
  location: {
    state: {
      type: String,
    },
    district: {
      type: String,
    },
    taluka: {
      type: String,
    },
    village: {
      type: String,
    },
  },
  legalDetails: [
    {
      type: String,
    },
  ],
});


const Case = mongoose.model("Case", caseSchema);

module.exports = Case;
