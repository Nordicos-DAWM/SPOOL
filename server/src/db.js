
const Sequelize = require("sequelize");
const UserModel = require("./models/user");
const UserTypeModel = require("./models/userType");
const ProjectModel = require("./models/project");
const SkillModel = require("./models/skill");
const CategoryModel = require("./models/category");

const conn = new Sequelize("spool","root", "password", {
    host: "localhost",
    dialect: "mysql"
});

const User = UserModel(conn,Sequelize);
const UserType = UserTypeModel(conn,Sequelize);
const Project = ProjectModel(conn,Sequelize);
const Skill = SkillModel(conn,Sequelize);
const Category = CategoryModel(conn,Sequelize);


UserType.hasMany(User);
User.belongsTo(UserType);

Project.belongsToMany(Skill, {through: 'Projects-Skills', timestamps: false});
Skill.belongsToMany(Project, {through: 'Projects-Skills', timestamps: false});

Project.belongsToMany(Category, {through: 'Projects-Categories', timestamps: false});
Category.belongsToMany(Project, {through: 'Projects-Categories', timestamps: false});

User.hasMany(Project);
Project.belongsTo(User);



conn.sync({force:false})
.then(()=> {
    console.log("Conexion exitosa");
})



module.exports = {
    User,
    Project,
    UserType,
    Skill,
    Category
}




