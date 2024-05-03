const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require('bcrypt');

const signupSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    emailAddress: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: validator.isEmail,
            message: '{VALUE} is not a valid email address'
        }
    },
    password: {
        type: String,
        required: true
    },
    dateOfBirth: {
        type: Date,
        required: true
    },
    ordinaryPlaceOfWorking: {
        type: String,
        required: true
    },
    district: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    mobile: {
        type: String,
        required: true
    },
    aadhar: {
        type: String,
        required: true
    },
    barNumber: {
        type: String,
        required: true
    },
    pincode: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    }
});

// Hash password before saving to database
signupSchema.pre('save', async function(next) {
    const user = this;
    if (!user.isModified('password')) return next();
    try {
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(user.password, salt);
        user.password = hash;
        next();
    } catch (error) {
        return next(error);
    }
});

const UserSignup = mongoose.model('UserSignup', signupSchema);

module.exports = UserSignup;
