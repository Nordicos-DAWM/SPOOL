
const Sequelize = require("sequelize");
// Modelos
const UserModel = require("./models/user");
const UserTypeModel = require("./models/userType");
const ProjectModel = require("./models/project");
const SkillModel = require("./models/skill");
const ApplicationModel = require("./models/application");
const NewsModel = require("./models/news");
const StudentDetailsModel = require("./models/studentDetails");

const conn = new Sequelize("spool","root", "root", {
    host: "localhost",
    dialect: "mysql"
});

// Tablas en BD
const User = UserModel(conn,Sequelize);
const UserType = UserTypeModel(conn,Sequelize);
const Project = ProjectModel(conn,Sequelize);
const Skill = SkillModel(conn,Sequelize);
const Application = ApplicationModel(conn,Sequelize);
const News = NewsModel(conn,Sequelize);
const StudentDetails = StudentDetailsModel(conn,Sequelize);


// Un usuario tiene un tipo de usuario
UserType.hasMany(User);
User.belongsTo(UserType);

//Un proyecto tiene muchas skills
Project.belongsToMany(Skill, {through: 'Projects-Skills'});
Skill.belongsToMany(Project, {through: 'Projects-Skills'});

// Relacion uno a uno user - studentDetails
User.hasOne(StudentDetails);
StudentDetails.belongsTo(User);

// Relacion User (admin) - News
User.hasMany(News);
News.belongsTo(User);

// Relacion User - Application
User.hasMany(Application);
Application.belongsTo(User);

// Relacion User - Project
User.hasMany(Project);
Project.belongsTo(User);



conn.sync({force:false})
.then(()=> {
    console.log("Conexion exitosa");
})



module.exports = {
    User, Project, UserType, Skill, Application, News, StudentDetails
}




