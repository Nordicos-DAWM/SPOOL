//Requiero express y lo guardo en una constante
const express = require('express');
//Requiero morgan y lo guardo en una constante
const morgan = require('morgan');
//Llamo al objeto express y lo guardo en una constante
const app = express();

require('dotenv').config();


require("./db");
/** 
const mailerRouter = require('./routes/contact');
const applicationRouter = require('./routes/application');

const userRouter = require('./routes/user')
const newsRouter = require('./routes/news')
*/
const projectRouter = require('./routes/project');
/*Configuracion del servidor*/
//Le asigno una variable y una constante que asume el puerto 3000 por defecto
app.set('port' , process.env.PORT || 3000);

/*Middlewares*/
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


/*Rutas*/
app.use("/api/project",projectRouter );
app.listen(app.get('port') , () => {
	console.log('Server on port' , app.get('port'));
});