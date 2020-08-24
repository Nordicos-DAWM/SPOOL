

const { Router } = require('express');

const router = Router();
const { Project, Skill } = require("../db");


router.get('/', (req,res,next)=>{
    Project.findAll({
        include:{
            model: Skill,
            attributes: ['name'],

        },
    })
    .then((projects)=>{
        res.send(projects)
    });
    

})

module.exports = router;


