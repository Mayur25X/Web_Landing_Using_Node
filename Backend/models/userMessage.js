const { error, data } = require('jquery');
const mongoose = require('mongoose');
require('../db/conn')
const validator = require('validator')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength:3
    },
    email: {
        type: String,
        require: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Invalid Email id");
            }
        }
    },
    phone: {
        type: String,
        required: true,
        validate(value) {
            if (!validator.isMobilePhone(value, 'en-IN')) {
                return  Error ("Invalid Phone Number")
            }
        }
    },
    message: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default:Date.now
    }



})

const Client = mongoose.model('Client', userSchema);

module.exports = Client
