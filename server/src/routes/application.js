var express = require('express');

var Application = require('../models/application');
var User = require('../models/user');
var Project = require('../models/project')

var router = express.Router();

router.get('/', async (req, res, next) => {
    let applications = await Application.find()
    applications = applications.filter((a)=>{
        if(a.logicState){
            return a; 
        }
    })
    applications = applications.map(async(app)=>{
        let student = await User.findOne({_id:app.idStudent});
        let project = await Project.findOne({_id:app.idProject});
        let proposer = await User.findOne({_id:project.id_proposer});
        project = {...project,id_proposer:proposer}
        //project = {...{id_proposer,...project},id_proposer:proposer}
        return {...app,idStudent:student,idProject:project}
    })
    res.send(applications)
});

router.get('/id/:id',async (req,res,next)=>{
    try{
        let application = await Application.findOne({_id:req.params.id}).orFail();
        let student = await User.findOne({_id:application.idStudent});
        let project = await Project.findOne({_id:application.idProject});
        let proposer = await User.findOne({_id:project.id_proposer});
        project = {...project,id_proposer:proposer}
        application={...application,idStudent:student,idProject:project}

        if(application.logicState){
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
        {...req.body,'logicState':true},(err,newApplication)=>{
            if(err){
                res.status(403);
                res.send(err.message);
            }else{
                res.status(201);
                res.send({message:"Se ha creado una aplicacion exitosamente"});
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
                        res.send({message:"Se ha actualizado una aplicacion exitosamente"});
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
                {logicState:false},
                (err,delApplication)=>{
                    if(err){
                        res.status(403);
                        res.send(err);
                    }else{
                        res.status(201);
                        res.send({message:"Se ha eliminado una aplicacion exitosamente"});
                    }
                }
            );
    }catch{
        res.status(400);
        res.send({error:"Aplicacion no existe"})
    }
});

module.exports = router;