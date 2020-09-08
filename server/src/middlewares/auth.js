const jwt = require('jsonwebtoken');
const config = require('config');

// CREAR FUNCION MIDDLEWARE PARA VALIDACIÓN DE TOKENS
const validarToken =  (req, res, next) =>{
    const token = req.headers['x-access-token'];

    if(!token){
        return res.status(400).send({message: "x-access-token no provisto."});
    }

    try{
        jwt.verify(token, config.get('secretToken'));
        next();
    }catch{
        return res.status(401).send({message: "Token inválido."});
    }
}

module.exports = {validarToken}