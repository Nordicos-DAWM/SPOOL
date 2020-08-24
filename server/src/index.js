//Requiero express y lo guardo en una constante
const express = require('express');
//Requiero morgan y lo guardo en una constante
const morgan = require('morgan');
//Llamo al objeto express y lo guardo en una constante
const app = express();

require('dotenv').config();


require("./db");

const projectRouter = require('./routes/project');
const newsRouter = require('./routes/news');
const { DataTypes } = require('sequelize/types');

/*Configuracion del servidor*/
app.set('port' , process.env.PORT || 3000);

/*Middlewares*/
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


/*Rutas*/
app.use("/api/project",projectRouter );
app.use("/api/news",newsRouter);

app.listen(app.get('port') , () => {
	console.log('Server on port' , app.get('port'));
});



