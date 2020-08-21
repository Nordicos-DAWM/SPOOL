//Requiero express y lo guardo en una constante
const express = require('express');
//Requiero morgan y lo guardo en una constante
const morgan = require('morgan');
//Llamo al objeto express y lo guardo en una constante
const app = express();

require('dotenv').config();


const mailerRouter = require('./routes/contact');
const projectRouter = require('./routes/project');
const connection = require('./models/index');

/*Configuracion del servidor*/
//Le asigno una variable y una constante que asume el puerto 3000 por defecto
app.set('port' , process.env.PORT || 3000);

/*Middlewares*/
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


/*Rutas*/
app.use('/api/contact' ,mailerRouter);
app.use('/api/projects', projectRouter);



app.listen(app.get('port') , () => {
	console.log('Server on port' , app.get('port'));
});
