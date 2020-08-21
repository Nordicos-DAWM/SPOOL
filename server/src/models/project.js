var mongoose = require('mongoose');
// define el esquema de los documentos que van a estar dentro de esa colección
const projectSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true,
    },
    state: {
        type: String,
        required: true,
    },
    mainCategory: {
        type: String,
        required: true,
    },
    categories: {
        type: Array,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    proposer: {
        type: String,
        required: true,
    },
    contactEmail: {
        type: String, 
        required: true,
    },
    maxParticipants: {
        required: true,
        type: String
    }, 
    skills:{
        type: Array,
        required: true
        
    }, 
    color:{
        type: String,
        required: true
    },
    logicState:{
        type: Boolean
    },
    url_repository: {
        type: String, 
        required: true,
    }

    
});

module.exports = mongoose.model('projects', projectSchema);