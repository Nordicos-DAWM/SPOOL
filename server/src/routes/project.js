

const mongoose = require("../models/index");

const Project = require("../models/project");

const { Router } = require('express');

const router = Router();


router.get('/', (req,res,next)=>{
    Project.find((err, project) => {
        console.log(project);
        if (err) throw err;
        res.status(200).send(project);
    });
})

router.get('/id/:id', async (req,res,next)=>{
    try {
        const project = await Project.findOne({ _id: req.params.id }).orFail();
        res.send(project);

    } catch {
        res.status(404);
        res.send({ error: "Proyecto no existe" });
    }
});

router.get('/mainCategory/:mainCategory', async (req,res,next)=>{
    try {
        const projects = await Project.find({ mainCategory: req.params.mainCategory });
        res.status(200).send(projects);

    } catch {
        res.status(404).send([]);
    }
});


router.post('/', async (req, res) => {
    try{
        const project = new Project({
                title: req.body.title,
                state: req.body.state,
                mainCategory: req.body.mainCategory,
                categories: req.body.categories,
                description: req.body.description,
                proposer: req.body.proposer,
                contactEmail: req.body.contactEmail,
                maxParticipants: req.body.maxParticipants,
                color: req.body.color,
                skills: req.body.skills,
                url_repository: req.body.url_repository,
                logicState : true,
            

            });
            await project.save();
            res.status(200).send({data: project});
        }catch(error){
            res.status(404).send({"error":error["message"]});
        }
        });
router.put("/id/:id" , async (req, res) => {
    try{
        const project = await Project.findOne({ _id: req.params.id });
        
        if (req.body.title)
            project.title = req.body.title;
        
        if (req.body.state)
            project.state = req.body.state;
        
        if (req.body.mainCategory)
            project.mainCategory = req.body.mainCategory;
        
        if (req.body.categories)
            project.categories = req.body.categories;

        if (req.body.description)
            project.description = req.body.description;

        if (req.body.proposer)
            project.proposer = req.body.proposer;

        if (req.body.contactEmail)
            project.contactEmail = req.body.contactEmail;
        
        if (req.body.maxParticipants)
            project.maxParticipants = req.body.maxParticipants;

        if (req.body.color) 
            project.color = req.body.color;

        if (req.body.skills) 
            project.skills = req.body.skills;

        if (req.body.url_repository)
            project.url_repository = req.body.url_repository;

        await project.save();
        res.status(200).send({update: true, data: project});

    } catch(error) {
        res.status(404);
        res.send({ update: false, error: error});
    }
});

router.delete('/id/:id', async (req, res, next) => {
    try{
        const project = await Project.findOne({ _id: req.params.id });
        project.logicState = false; 
        await project.save();
        res.status(200).send({message:"Se elimino el registro exitosamente"});
    } catch {
        res.status(404).send({ error: "Registro no existe" });
    }

});

module.exports = router;


