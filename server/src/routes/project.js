

const { Router } = require('express');

const router = Router();
const { Project, Skill } = require("../db");


router.get('/', (req,res,next)=>{
    Project.findAll({
        include:{
            model: Skill,
            attributes: ['name'],
            through: { attributes: [] } 

        },
    })
    .then((projects)=>{
     res.json(projects);
        
    })
    .catch((error)=>{
        console.log(error);
    })

});

router.get('/by_id/:id', (req,res,next)=>{


});

router.post('/', (req,res,next)=>{

});



router.put('/:id', (req,res,next)=>{


});

router.delete('/:id', (req,res,next)=>{


});


router.get('/by_user/:userId', (req,res,next)=>{


})

router.post('/', (req,res,next)=>{


});

module.exports = router;


