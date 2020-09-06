const { Router } = require('express');
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs'); 
const {User, UserType} = require('../databases/db');
const router = Router();

var SECRET_TOKEN = 'DOMENICA'

// USER LOGIN
router.post('/', async (req, res, next)=>{

    const user =  await User.findOne({
        where: {
            email: req.body.email,
        },
        include:[{
            model: UserType,
            attributes: ['type']
        }],
    });

    if(!user){
        return res.status(404).send({message:"Usuario o contraseña incorrectos."});
    }

    if(!bcrypt.compareSync(req.body.password,user.password)){
        return res.status(404).send({message:"Usuario o contraseña incorrectos."});
    }

    let token = jwt.sign(req.body, SECRET_TOKEN, {expiresIn: '12h'});

    res.status(200).send({token: token, user: user});
});

module.exports = router;


