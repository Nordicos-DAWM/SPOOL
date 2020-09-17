var mongoose = require('mongoose');

const userReportSchema = new mongoose.Schema({
    userId: {
        type: Number
    },
    email: {
        type: String
    },
    type: {
        type: String
    },
    userType:{
        type: String
    },
    timestamp: {
        type: Date
    }
});

module.exports = mongoose.model('userReport', userReportSchema);