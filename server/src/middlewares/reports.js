var projectReport = require("../models/projectReport");
var userReport = require("../models/userReport");


let projectLogs = async (req, res, next) =>{
        
        var projectBefore = await Project.findOne({
            where: {
                id:req.params.id
            } 
        });

        if(projectBefore.state != req.body.state){
            const newEntry = await projectReport.create(
                {
                    id: req.params.id,
                    stateBefore: projectBefore.state,
                    stateNow: req.body.state,
                    timestamp: new Date()
                }
            );  
        }
        next();
}


module.exports = {projectLogs}
