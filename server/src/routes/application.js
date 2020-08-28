var express = require('express');
var router = express.Router();

const {Application, User, Project} = require("../db");

// devuelve todas las aplicaciones
router.get('/', async (req, res, next) => {
    const apps =  await Application.findAll({ 
        where: {
            logicState: true
        },
        include:[{
            model: User,
        },{
            model: Project,
            attributes: ['title','description','mainCategory','maxParticipants',
        'color','contactEmail','urlRepository','state']
        }],
    });
    res.status(200).send(apps);
});


router.post('/', async (req, res, next) => {
    
    const newApp = await Application.create(req.body);

    if(!newApp){
        res.status(404).send({error:'No se pudo crear la aplicación.'});
    }else{
        res.status(200).send(newApp);
    }

});

// Devuelve las aplicaciones de un estudiante dado el id del estudiante
router.get('/by_student/:studentId',async (req,res,next)=>{
    const app = await Application.findAll({
        where: {
            userId: req.params.studentId,
            logicState: true
        },
        include:[{
            model: User,
        },{
            model: Project,
            attributes: ['title','description','mainCategory','maxParticipants',
        'color','contactEmail','urlRepository','state']
        }],
    });

    if(!app){
        res.status(404).send({error:'Usuario no encontrado.'})
    }else{
        res.status(200).send(app)
    }
});

// Elimina una aplicacion dado su id. 
router.delete('/:id', async (req,res,next)=>{

    const app = await Application.update({ logicState: false }, {
        where: {
          id: req.params.id
        }
      });

    if(!app){
        res.status(404).send({error:'Aplicación no pudo ser eliminada.'})
    }else{
        res.status(200).send({message:'Aplicación se eliminó exitosamente.'})
    }

});


module.exports = router;