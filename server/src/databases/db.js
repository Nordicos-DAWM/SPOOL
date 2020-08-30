
const Sequelize = require("sequelize");
// Modelos
const UserModel = require("../models/user");
const UserTypeModel = require("../models/userType");
const ProjectModel = require("../models/project");
const SkillModel = require("../models/skill");
const CategoryModel = require("../models/category");
const ApplicationModel = require("../models/application");
const NewsModel = require("../models/news");
const StudentDetailsModel = require("../models/studentDetails");


const conn = new Sequelize("spool","root", "password", {
    host: "localhost",
    dialect: "mysql",
    logging: false
});

// Tablas en BD
const User = UserModel(conn,Sequelize);
const UserType = UserTypeModel(conn,Sequelize);
const Project = ProjectModel(conn,Sequelize);
const Skill = SkillModel(conn,Sequelize);
const Category = CategoryModel(conn,Sequelize);
const Application = ApplicationModel(conn,Sequelize);
const News = NewsModel(conn,Sequelize);
const StudentDetails = StudentDetailsModel(conn,Sequelize);


// Un usuario tiene un tipo de usuario
UserType.hasMany(User);
User.belongsTo(UserType);

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

//Un proyecto tiene muchas skills
Project.belongsToMany(Skill, {through: 'projects-skills', timestamps: false});
Skill.belongsToMany(Project, {through: 'projects-skills', timestamps: false});

//Un proyecto tiene muchas categories
Project.belongsToMany(Category, {through: 'projects-categories', timestamps: false});
Category.belongsToMany(Project, {through: 'projects-categories', timestamps: false});

//Un proyecto tiene muchas applications
Project.hasMany(Application);
Application.belongsTo(Project);


conn.sync({force:false})
.then(()=> {
    console.log("MySQL connnection successful");
})


module.exports = {
    conn, User, Project, UserType, Skill, Category, Application, News, StudentDetails
}
