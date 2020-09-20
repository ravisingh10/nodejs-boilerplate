const { string } = require('joi');
const mongoose = require('mongoose');
const { isEmail } = require('validator')

const { FIRSTNAME_MIN_LENGHT } = require('../util/constants');
const { Schema, model } = mongoose;

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true,
        minlength: FIRSTNAME_MIN_LENGHT,
    },
    lastName: {
        type: String,
        required: false,
    },
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: isEmail,
            message: "Invalid email",
        }
    },
    password: {
        type: String,
        required: false,
    },
    dateOfBirth: {
        type: Date,
        required: false,
    }
});

const User = model('User', userSchema);

module.exports = User;