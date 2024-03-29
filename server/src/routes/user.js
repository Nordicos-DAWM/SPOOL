var express = require('express');
var router = express.Router();
const {check, validationResult} = require('express-validator');
const {User, UserType, StudentDetails} = require("../databases/db");
const bcrypt = require("bcryptjs"); 
const config = require('config');
const jwt = require("jsonwebtoken");
const {validarToken} = require('../middlewares/auth')

router.get('/',validarToken, async (req, res, next) => {
    const users =  await User.findAll({
        exclude: ["password"],
        include:[{
            model: UserType,
            attributes: ['type']
        }],
    });
    res.status(200).send(users);
});

router.get('/me',validarToken, (req,res,next)=>{
    const token = req.headers['x-access-token']

    const decoded = jwt.verify(token, config.get("secretToken"));
    res.send(decoded);
});

router.get('/types',validarToken, async (req,res,next)=>{
    const usersTypes =  await UserType.findAll();
    res.status(200).send(usersTypes);
});



router.post('/',[
    check('firstName','El nombre del usuario es un campo obligatorio.').notEmpty(),
    check('lastName','El apellido del usuario es un campo obligatorio.').notEmpty(),
    check('email','El email es un campo obligatorio.').notEmpty(),
    check('email','El email proporcionado no es válido.').isEmail(),
    check('password','La contraseña es un campo obligatorio.').notEmpty(),
    check('birthday','La fecha de nacimiento es un campo obligatorio.').notEmpty(),
    check('birthday','Debe ingresar una fecha válida.').isDate(),
    check('userTypeId', 'El tipo de usuario es requerido.').isInt()
], async (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(422).json({message:errors["errors"][0]["msg"]});
    }
    
    req.body.password = bcrypt.hashSync(req.body.password,7);
    
    try{
        const newUser = await User.create(req.body);
        if (req.body.userTypeId == 1){
            const details = await StudentDetails.create({"faculty": req.body.faculty.toUpperCase(),"career": req.body.career.toUpperCase(), "userId": newUser.id })
        }
        res.status(200).send(newUser);
    } catch (error){ 
        return res.status(400).send({message:"El correo ingresado ya está registrado en la aplicación."})      
    }

    
    
});


module.exports = router;

