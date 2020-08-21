var mongoose = require('mongoose');

const applicationSchema =  new mongoose.Schema({
    id_student:{
        type: String
    },
    id_project:{
        type:String
    },
    state:{
        type:String
    },
    is_subject:{
        type: Boolean
    },
    reason:{
        type: String
    },
    proposal:{
        type:String
    },
    logic_state:{
        type:Boolean
    }
})

module.exports = mongoose.model('applications',applicationSchema);