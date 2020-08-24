
const Sequelize = require("sequelize");
const UserModel = require("./models/user");
const UserTypeModel = require("./models/userType");
const ProjectModel = require("./models/project");
const SkillModel = require("./models/skill");

const conn = new Sequelize("spool","root", "password", {
    host: "localhost",
    dialect: "mysql"
});

const User = UserModel(conn,Sequelize);
const UserType = UserTypeModel(conn,Sequelize);
const Project = ProjectModel(conn,Sequelize);
const Skill = SkillModel(conn,Sequelize);

// Un usuario tiene un tipo de usuario

UserType.hasMany(User);
User.belongsTo(UserType);

Project.belongsToMany(Skill, {through: 'Projects-Skills'});
Skill.belongsToMany(Project, {through: 'Projects-Skills'});




conn.sync({force:false})
.then(()=> {
    console.log("Conexion exitosa");
})



module.exports = {
    User,
    Project,
    UserType,
    Skill
}




