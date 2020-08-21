var express = require('express');
var News = require("../models/news");

var router = express.Router();

router.get('/', async (req, res, next) => {
    const news = await News.find()
    res.send(news)
});


router.get('/id/:id', async (req, res, next) => {
    let notice;
    try {
        notice= await News.findOne({ id: req.params.id }).orFail();
    } catch {
        res.status(404)
        res.send({ error: "Noticia no existe." })
    }

    if (notice.logicState) {
        res.send(notice)
    } else {
        res.status(404)
        res.send({ error: "Noticia no existe." })
    }

});


router.put('/update/:id', async (req, res, next) => {
    let notice;
    try {
        notice = await News.findOne({ id: req.params.id }).orFail();
    } catch {
        res.status(404);
        res.send({ error: "Noticia no existe." });
    }

    if (notice.logicState) {
        await notice.update(req.body, (err,updated)=>{
            if (err) {
                res.status(400);
                res.send(err);
            } else {
                res.status(200);
                res.send(updated);
            }
        });
    } else {
        res.status(404);
        res.send({ error: "Noticia no existe." });
    }

});


router.post('/create', async (req, res, next) => {
    const newNotice = await News.create(req.body, (err, created)=>{
        if(err){
            res.status(400);
            res.send(err);
        }else{
            res.status(200);
            res.send(created);
        }
    });  
});


router.delete('/delete/:id', async (req, res, next) => {
    let notice;
    try {
        notice = await News.findOne({ id: req.params.id }).orFail(); 
    } catch{
        res.status(404);
        res.send({ error: "Noticia no existe." });

    }
    await notice.update({logicState: false}, (err,updated)=>{
        if (err) {
            res.status(400);
            res.send(err);
        } else {
            res.status(200);
            res.send(updated);
        }
    });
});

module.exports = router;