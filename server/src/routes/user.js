var express = require('express');
var router = express.Router();
const {User, UserType} = require("../db");
const e = require('express');


router.get('/', async (req, res, next) => {

    const users =  await User.findAll({
        include:[{
            model: UserType,
            attributes: ['type']
        }],
    });
    res.status(200).send(users);
});


router.post('/', async (req, res, next) => {
    
    const newUser = await User.create(req.body);

    if(!newUser){
        res.status(404).send({error:'No se pudo ingresar usuario.'});
    }else{
        res.status(200).send(newUser);
    }

});


module.exports = router;

