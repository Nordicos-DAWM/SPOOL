var mongoose = require('mongoose');

const userReportSchema = new mongoose.Schema({
    id: {
        type: Number
    },
    email: {
        type: String
    },
    type: {
        type: String
    },
    timestamp: {
        type: Date
    }
});

module.exports = mongoose.model('userReport', userReportSchema);