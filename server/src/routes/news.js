var express = require('express');
var router = express.Router();
const {check, validationResult} = require('express-validator');
const {User, News} = require("../db");


router.get('/', async (req, res, next) => {
    const news = await News.findAll({
        where: {
            logicState: true
        }
    })
    res.status(200).send(news);
});

router.post('/', [
    check('title','El título de la noticia es un campo obligatorio.').notEmpty(),
    check('description','La descripción de la noticia es un campo obligatorio.').notEmpty(),
    check('date','La fecha de la noticia es un campo obligatorio.').notEmpty(),
    check('date','Debe ingresar una fecha válida.').isDate()
], async (req, res, next) => {

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(422).json({message:errors["errors"][0]["msg"]});
    }

    const newNotice = await News.create(req.body);
    res.status(200).send(newNotice);
});


router.put('/:id',[
    check('title','El título de la noticia es un campo obligatorio.').notEmpty(),
    check('description','La descripción de la noticia es un campo obligatorio.').notEmpty(),
    check('date','La fecha de la noticia es un campo obligatorio.').notEmpty(),
    check('date','Debe ingresar una fecha válida.').isDate()
] ,async (req, res, next) => {

    const notice = await News.update(req.body, {
        where: {
          id: req.params.id
        }
    });

    res.status(200).send(notice);
});

router.delete('/:id', async (req, res, next) => {

    const notice = await News.update({ logicState: false }, {
        where: {
          id: req.params.id
        }
      });

    if(!notice){
        res.status(404).send({error:'Noticia no pudo ser eliminada.'})
    }else{
        res.status(200).send({message:'Noticia se eliminó exitosamente.'})
    }
});


module.exports = router;