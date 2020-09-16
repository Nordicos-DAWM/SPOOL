var mongoose = require('mongoose');

const projectReportSchema = new mongoose.Schema({
    projectId: {
        type: Number
    },
    mainCategory:{
        type: String
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