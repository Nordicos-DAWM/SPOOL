
const Skill = (sequelize, type) =>{
    return sequelize.define('skill', {
    id: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: type.STRING,
        allowNull: false
    },
    }, {timestamps: false});
}

module.exports = Skill; 
