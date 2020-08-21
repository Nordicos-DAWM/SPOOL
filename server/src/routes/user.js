var express = require('express');
var User = require("../models/user");

var router = express.Router();

router.get('/', async (req, res, next) => {
    const users = await User.find()
    res.send(users)
});


router.get('/id/:id', async (req, res, next) => {
    let user;
    try {
        user = await User.findOne({ id: req.params.id }).orFail();
    } catch {
        res.status(404)
        res.send({ error: "User does not exist" })
    }

    if (user.logicState) {
        res.send(user)
    } else {
        res.status(404)
        res.send({ error: "User does not exist" })
    }

});


router.put('/update/:id', async (req, res, next) => {
    let user;
    try {
        user = await User.findOne({ id: req.params.id }).orFail();
    } catch {
        res.status(404);
        res.send({ error: "User does not exist" });
    }

    if (user.logicState) {
        await user.update(req.body, (err,updated)=>{
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
        res.send({ error: "User does not exist" });
    }
});


router.post('/create', async (req, res, next) => {
    const newUser = await User.create(req.body, (err, created)=>{
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
    let user;
    try {
        user = await User.findOne({ id: req.params.id }).orFail(); 
    } catch{
        res.status(404);
        res.send({ error: "User does not exist" });

    }
    await user.update({logicState: false}, (err,updated)=>{
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