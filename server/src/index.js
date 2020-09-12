//Requiero express y lo guardo en una constante
const express = require('express');
//Requiero morgan y lo guardo en una constante
const morgan = require('morgan');
//Llamo al objeto express y lo guardo en una constante
const app = express();
let cors = require('cors')
const {validarToken} = require('./middlewares/auth');

require('dotenv').config();
require("./databases/db");
require("./databases/reportsDb");
const projectRouter = require('./routes/project');
const newsRouter = require('./routes/news');
const chartRouter = require('./routes/charts');
const userRouter = require('./routes/user');
const applicationRouter = require('./routes/application');
const contactRouter = require('./routes/contact');
const authRouter = require('./routes/auth');
const reportsRouter = require('./routes/reports');

/*Configuracion del servidor*/

app.set('port' ,process.env.PORT || 8080);

/*Middlewares*/
app.use(morgan('dev'));



app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors());
app.options('*', cors());

/*Rutas*/

app.use("/api/project",validarToken,projectRouter);
app.use("/api/chart/",validarToken,chartRouter);
app.use("/api/new",validarToken,newsRouter);
app.use("/api/user",userRouter);
app.use("/api/application",validarToken,applicationRouter);
app.use("/api/reports",validarToken,reportsRouter);
app.use("/api/contact",contactRouter );
app.use("/api/auth",authRouter);


app.listen(app.get('port') , () => {
	console.log('Server on port' , app.get('port'));
});



