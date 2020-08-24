
const Skill = (sequelize, type) =>{
    return sequelize.define('Skill', {
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
