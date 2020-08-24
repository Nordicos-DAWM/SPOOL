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
        allowNull: false,
        validate:{
            isEmail: true
        }
    },
    password:{
        type: type.STRING,
        allowNull: false
    },
    birthday:{
        type: type.DATE,
        allowNull: false
    },
    logicState:{
        type: type.BOOLEAN,
        allowNull: false
    }

    }, {timestamps: false});
}

module.exports = User; 
