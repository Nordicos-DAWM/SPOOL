/** 
var mongoose = require('mongoose');

const applicationSchema =  new mongoose.Schema({
    idStudent:{
        type: String
    },
    idProject:{
        type:String,
        required: true
    },
    state:{
        type:String,
        required:true
    },
    isSubject:{
        type: Boolean,
        required: true
    },
    reason:{
        type: String,
        required: true
    },
    proposal:{
        type:String,
        required: true
    },
    logicState:{
        type:Boolean
    }
})

module.exports = mongoose.model('applications',applicationSchema);

*/