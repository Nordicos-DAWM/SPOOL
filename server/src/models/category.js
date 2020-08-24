
const Category = (sequelize, type) =>{
    return sequelize.define('Category', {
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

module.exports = Category; 
