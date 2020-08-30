var express = require('express');
var router = express.Router();
const {check, validationResult} = require('express-validator');
const {Application, User, Project} = require("../database/db");

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


router.post('/', [
    check('state','El estado de la aplicación es un campo obligatorio.').notEmpty(),
    check('isSubject','Este es un campo obligatorio.').notEmpty().isBoolean(),
    check('reason','La razón de su aplicación es un campo obligatorio.').notEmpty(),
    check('proposal','La propuesta es un campo obligatorio.').isEmail()
], async (req, res, next) => {
    
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(422).json({message:errors["errors"][0]["msg"]});
    }

    const newApp = await Application.create(req.body);
    res.status(200).send(newApp);

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
        res.status(404).send({message:'No se pudo encontrar al Usuario.'})
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
        res.status(404).send({message:'Aplicación no pudo ser eliminada.'})
    }else{
        res.status(200).send({message:'Aplicación se eliminó exitosamente.'})
    }

});


module.exports = router;