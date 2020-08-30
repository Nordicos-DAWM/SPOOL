//Requiero express y lo guardo en una constante
const express = require('express');
//Requiero morgan y lo guardo en una constante
const morgan = require('morgan');
//Llamo al objeto express y lo guardo en una constante
const app = express();

require('dotenv').config();
require("./databases/db");
require("./databases/reportsDb");
const projectRouter = require('./routes/project');
const newsRouter = require('./routes/news');
const chartRouter = require('./routes/charts');
const userRouter = require('./routes/user');
const applicationRouter = require('./routes/application');

/*Configuracion del servidor*/
app.set('port' , process.env.PORT || 3000);

/*Middlewares*/
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


/*Rutas*/
app.use("/api/project",projectRouter );
app.use("/api/chart/", chartRouter);
app.use("/api/new",newsRouter);
app.use("/api/user",userRouter);
app.use("/api/application",applicationRouter)


app.listen(app.get('port') , () => {
	console.log('Server on port' , app.get('port'));
});



