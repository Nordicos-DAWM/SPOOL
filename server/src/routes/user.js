var express = require('express');
var router = express.Router();
const {check, validationResult} = require('express-validator');
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


router.post('/',[
    check('firstName','El nombre del usuario es un campo obligatorio.').notEmpty(),
    check('lastName','El apellido del usuario es un campo obligatorio.').notEmpty(),
    check('email','El email es un campo obligatorio.').notEmpty(),
    check('email','El email proporcionado no es válido.').isEmail(),
    check('password','La contraseña es un campo obligatorio.').notEmpty(),
    check('birthday','La fecha de nacimiento es un campo obligatorio.').notEmpty(),
    check('birthday','Debe ingresar una fecha válida.').isDate()
], async (req, res, next) => {
    
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(422).json({message:errors["errors"][0]["msg"]});
    }

    const newUser = await User.create(req.body);
    res.status(200).send(newUser);
    
});


module.exports = router;

