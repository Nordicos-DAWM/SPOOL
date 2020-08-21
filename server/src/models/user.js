var mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    id: {
        type: String,
        unique: true,
        required: true,
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    birthday: {
        type: Date, //Date? String?
        required: true
    },
    isStudent: {
        type: Boolean,
        required: true
    },
    faculty: {
        type: String
    },
    career: {
        type: String
    },
    logicState: {
        type: Boolean,
        required: true
    },
});

module.exports = mongoose.model('user', userSchema);