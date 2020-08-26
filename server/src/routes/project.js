

const { Router } = require('express');

const router = Router();
const { Project, Skill, Category, User } = require("../db");


router.get('/', async (req,res,next)=>{
   const projects =  await Project.findAll({
                    where: {
                        logicState: true
                    },
                    include:[{
                        model: Skill,
                        attributes: ['name'],
                        through: { attributes: [] } 

                    }, {
                        model: Category,
                        attributes: ['name'],
                        through: { attributes: [] } 
                    }, {
                        model: User
                    }],
                    });
    res.status(200).send(projects);

});

router.get('/by_id/:id', async (req,res,next)=>{
    const project =  await Project.findOne({
        where: {
            id: req.params.id,
            logicState: true,
        },
        include:[{
            model: Skill,
            attributes: ['name'],
            through: { attributes: [] } 

        }, {
            model: Category,
            attributes: ['name'],
            through: { attributes: [] } 
        }, {
            model: User
        }],
        });    
    res.status(200).send(project);

});

router.post('/', async (req,res,next)=>{
    const project = await Project.create(req.body);
    const projectId = project.id;

    req.body.categories.map((cat)=>{
        Category.count({ where: {name: cat} }).then(async function(count){
            let categoryId;
            if (count != 0) {
                let category = await Category.findOne({where: {name:cat }});
                categoryId = category.id;

            } else {
                categoryId = await Category.create({name:cat});
             }
             Project.findByPk(projectId).then(category=>{
                category.setCategories([categoryId]);
            });
        });
    } );  

    req.body.skills.map((skill)=>{
        Skill.count({ where: {name: skill} }).then(async function(count){
            let skillId;
            if (count != 0) {
                let skillObj = await Skill.findOne({where: {name:skill }});
                skillId = skillObj.id;

            } else {
                skillId = await Skill.create({name:cat});
                console.log(cat);
             }
             Project.findByPk(projectId).then(skill=>{
                skill.setSkills([skillId]);
            });
        });
    } );  

    res.status(200).send(projects);
});


router.put('/:id', async (req,res,next)=>{
    try{ 
        const projectsUpdated = await Project.update(req.body, {
            where: {
                id:req.params.id
            }    
        });
        if (projectsUpdated[0]){
            res.status(200).send({updated: true, message: "Se ha modificado correctamente"});
        }else{
        res.status(200).send({updated: false, message: "No se encontró elemento a actualizar"})
        }
    }catch{
        res.status(500).send({updated: false, message: "Error al procesar la solicitud"});

    }


});


router.delete('/:id', async (req,res,next)=>{
    try{ 
        const projectsDeleted = await Project.update({logicState:false}, {
            where: {
                id:req.params.id
            }    
        });
        if (projectsDeleted[0]){
            res.status(200).json({deleted: true, message: "Se ha eliminado correctamente"});
        }
        else{
        res.status(200).json({deleted: false, message: "No se encontró elemento a eliminar"});
        }
    }catch{
        res.statusCode = 500;
        res.status(500).json({deleted: false, message: "Error al procesar la solicitud"});
    }



});


router.get('/by_user/:userId', async (req,res,next)=>{
    const project =  await Project.findAll({
        where: {
            logicState: true,
        },
        include:[{
            model: Skill,
            attributes: ['name'],
            through: { attributes: [] } 

        }, {
            model: Category,
            attributes: ['name'],
            through: { attributes: [] } 
        }, {
            model: User,
            where:{
                id: req.params.userId
            }
        }],
        });    
    res.status(200).send(project);


})

module.exports = router;


