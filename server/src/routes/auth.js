const { Router } = require('express');
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs'); 
const {User, UserType} = require('../databases/db');
const router = Router();
const {userLogs} = require('../middlewares/reports');
const config = require('config');

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
        console.log(req.body.password);
        return res.status(404).send({message:"Usuario o contraseña incorrectos."});
    }

    let token = jwt.sign(user, config.get('secretToken'), {expiresIn: '24h'});
    next();
    res.status(200).send({token: token, user: user});
},userLogs);

module.exports = router;


