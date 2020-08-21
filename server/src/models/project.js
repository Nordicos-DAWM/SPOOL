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
    main_category: {
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
    contact_email: {
        type: String, 
        required: true,
    },
    max_participants: {
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
    logical_state:{
        type: Boolean
    },
    url_repository: {
        type: String, 
        required: true,
    }

    
});

module.exports = mongoose.model('projects', projectSchema);