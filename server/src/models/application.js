const Application = (sequelize, type) =>{
    return sequelize.define('application', {
    id: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    state:{
        type: type.STRING,
        allowNull: false
    },
    isSubject:{
        type: type.BOOLEAN,
        allowNull: false
    },
    reason:{
        type: type.STRING,
        allowNull: false
    },
    proposal:{
        type: type.STRING(500),
        allowNull: false
    },
    logicState:{
        type: type.BOOLEAN,
        allowNull: false,
        defaultValue: true,
    }

    }, {timestamps: false});
}

module.exports = Application; 