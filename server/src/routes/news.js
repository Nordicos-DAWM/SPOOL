var express = require('express');
var router = express.Router();

const {User, News} = require("../db");


router.get('/', async (req, res, next) => {
    const news = await News.findAll({
        where: {
            logicState: true
        }
    })
    res.status(200).send(news);
});

router.post('/', async (req, res, next) => {
    const newNotice = await News.create(req.body);

    if(!newNotice){
        res.status(404).send({error:'No se pudo crear nueva Noticia.'});
    }else{
        res.status(200).send(newNotice);
    }

});


router.put('/:id', async (req, res, next) => {
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