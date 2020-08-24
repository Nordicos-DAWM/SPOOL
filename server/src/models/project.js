
const Project = (sequelize, type) =>{
    return sequelize.define('Project', {
    id: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: type.STRING,
        allowNull: false
    },
    description:{
        type: type.STRING,
        allowNull: false
    }
    }, {timestamps: false});
}

module.exports = Project; 
