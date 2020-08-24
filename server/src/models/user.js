const User = (sequelize, type) =>{
    return sequelize.define('User', {
    id: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    firstName: {
        type: type.STRING,
        allowNull: false
    }, 
    lastName: {
        type: type.STRING,
        allowNull: false
    }, 
    email:{
        type: type.STRING,
        allowNull: false
    },
    password:{
        type: type.STRING,
        allowNull: false
    },
    birthday:{
        type: type.DATE,
        allowNull: false
    }

    }, {timestamps: false});
}

module.exports = User; 
