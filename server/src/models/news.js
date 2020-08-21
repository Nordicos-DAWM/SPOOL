var mongoose = require('mongoose');

const newsSchema = new mongoose.Schema({
    id: {
        type: String,
        unique: true,
        required: true,
    },
    title: {
        type: String,
        required: true
    },
    date: {
        type:  Date, //Date? String?
        required: true
    },
    description: {
        type: String,
        required: true
    },
    logicState: {
        type: Boolean,
        required: true
    },
});

module.exports = mongoose.model('news', newsSchema);