var express = require('express');

var Application = require('../models/application');
var User = require('../models/user');
var Project = require('../models/project')

var router = express.Router();

router.get('/', async (req, res, next) => {
    let applications = await Application.find()
    applications = applications.filter((a)=>{
        if(a.logic_state){
            return a; 
        }
    })
    applications = applications.map(async(app)=>{
        let student = await User.findOne({_id:app.id_student});
        let project = await Project.findOne({_id:app.id_project});
        let proposer = await User.findOne({_id:project.id_proposer});
        project = {...project,id_proposer:proposer}
        //project = {...{id_proposer,...project},id_proposer:proposer}
        return {...app,id_student:student,id_project:project}
    })
    res.send(applications)
});

router.get('/id/:id',async (req,res,next)=>{
    try{
        let application = await Application.findOne({_id:req.params.id}).orFail();
        let student = await User.findOne({_id:application.id_student});
        let project = await Project.findOne({_id:application.id_project});
        let proposer = await User.findOne({_id:project.id_proposer});
        project = {...project,id_proposer:proposer}
        application={...application,id_student:student,id_project:project}

        if(application.logic_state){
            res.send(application);
        }else{
            res.status(400);
            res.send({error: "Aplicacion no existe"});
        }
    }catch{
        res.status(400);
        res.send({error: "Aplicacion no existe"});
    }
});

router.post('/create/', async (req,res,next)=>{
    await Application.create(
        {...req.body,'logic_state':true},(err,newApplication)=>{
            if(err){
                res.status(403);
                res.send(err.message);
            }else{
                res.status(201);
                res.send(newApplication);
            }
        }
    );
});

router.put('/update/:id', async (req,res,next)=>{
    try{
        let application = await Application.findOne({_id:req.params.id}).orFail();
 
            await application.updateOne(
                req.body,(err,updApplication)=>{
                    if(err){
                        res.status(403);
                        res.send(err);
                    }else{
                        res.status(201);
                        res.send(updApplication);
                    }
                }
            )

    }catch{
        res.status(400);
        res.send({error:"Aplicacion no existe"})
    }
});

router.delete('/delete/:id',async(req,res,next)=>{
    try{
        let application = await Application.findOne({_id:req.params.id}).orFail();
            await application.updateOne(
                {logic_state:false},
                (err,delApplication)=>{
                    if(err){
                        res.status(403);
                        res.send(err);
                    }else{
                        res.status(201);
                        res.send(delApplication);
                    }
                }
            );
    }catch{
        res.status(400);
        res.send({error:"Aplicacion no existe"})
    }
});

module.exports = router;