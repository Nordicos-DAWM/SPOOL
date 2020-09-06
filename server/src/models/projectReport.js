var mongoose = require('mongoose');

const projectReportSchema = new mongoose.Schema({
    id: {
        type: Number
    },
    stateBefore: {
        type: String
    },
    stateNow: {
        type: String
    },
    timestamp: {
        type: Date
    }
});

module.exports = mongoose.model('projectReport', projectReportSchema);