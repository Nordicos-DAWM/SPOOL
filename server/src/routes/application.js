var express = require('express');
var router = express.Router();


// devuelve todas las aplicaciones
router.get('/', async (req, res, next) => {

});

// Devuelve las aplicaciones de un estudiante dado el id del estudiante
router.get('/by_student/:studentId',async (req,res,next)=>{

});

// Elimina una aplicacion dado su id. 
router.delete('/:id', async (req,res,next)=>{

});


module.exports = router;