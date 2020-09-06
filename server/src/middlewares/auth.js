const jwt = require('jsonwebtoken')
var SECRET_TOKEN = 'DOMENICA'

// CREAR FUNCION MIDDLEWARE PARA VALIDACIÓN DE TOKENS
const validarToken =  (req, res, next) =>{
    const token = req.headers['x-access-token'];

    if(!token){
        return res.status(400).send({message: "x-access-token no provisto."});
    }

    try{
        jwt.verify(token, SECRET_TOKEN);
        next();
    }catch{
        return res.status(401).send({message: "Token inválido."});
    }
}

module.exports = {validarToken}