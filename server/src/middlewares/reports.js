let projectReport = require("../models/projectReport");
let userReport = require("../models/userReport");
let {Project, User, UserType} = require('../databases/db');
let {conn} = require("../databases/db")

let projectLogs = async (req, res, next) =>{
        
        var projectBefore = await Project.findOne({
            where: {
                id:req.params.id
            } 
        });

        if(projectBefore.state != req.body.state){
            const newEntry = await projectReport.create(
                {
                    projectId: req.params.id,
                    mainCategory: projectBefore.mainCategory,
                    stateBefore: projectBefore.state,
                    stateNow: req.body.state,
                    timestamp: new Date()
                }
            );  
        }
        next();
}


let projectCreated = (req, res, next) =>{
    Project.findOne({
        attributes: [[conn.fn('max', conn.col('id')), 'maxId']],
        raw: true
      }).then(async (projectId) => {
        let maxId = projectId.maxId;
        
        const newEntry = await projectReport.create(
            {
                projectId: maxId,
                mainCategory: req.body.mainCategory,
                stateBefore: null,
                stateNow: "Disponible",
                timestamp: new Date()
            }
        );  


      });

}

let userLogs = async (req,res,next) =>{
    const user =  await User.findOne({
        where: {
            email: req.body.email,
        },
        attributes:['id','email'],
        include:[{
            model: UserType,
            attributes: ['type']
        }]
    });

    const newEntry = await userReport.create(
        {
            userId: user.id,
            email: user.email,
            type: user.userType.type,
            timestamp: new Date()
        }
    );  
    
}


module.exports = { projectLogs, projectCreated, userLogs}
