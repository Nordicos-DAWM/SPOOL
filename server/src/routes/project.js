

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

router.post('/', async (req, res) => {
    try{
        const project = new Project({
                title: req.body.title,
                state: req.body.state,
                main_category: req.body.main_category,
                categories: req.body.categories,
                description: req.body.description,
                proposer: req.body.proposer,
                contact_email: req.body.contact_email,
                max_participants: req.body.max_participants,
                color: req.body.color,
                skills: req.body.skills,
                url_repository: req.body.url_repository,
                logic_state : true,
            

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
        
        if (req.body.main_category)
            project.main_category = req.body.main_category;
        
        if (req.body.categories)
            project.categories = req.body.categories;

        if (req.body.description)
            project.description = req.body.description;

        if (req.body.proposer)
            project.proposer = req.body.proposer;

        if (req.body.contact_email)
            project.contact_email = req.body.contact_email;
        
        if (req.body.max_participants)
            project.max_participants = req.body.max_participants;

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
        project.logic_state = false; 
        await project.save();
        res.status(200).send({message:"Se elimino el registro exitosamente"});
    } catch {
        res.status(404).send({ error: "Registro no existe" });
    }

});

module.exports = router;


