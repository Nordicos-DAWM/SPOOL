
const Project = (sequelize, type) =>{
    return sequelize.define('project', {
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
        type: type.STRING(400),
        allowNull: false
    }, 
    mainCategory: {
        type: type.STRING,
        allowNull: false 
    },
    maxParticipants: {
        type: type.INTEGER,
        allowNull: false 
    },
    color: {
        type: type.STRING,
        allowNull: false 
    }, 
    contactEmail: {
        type: type.STRING,
        allowNull: false, 
        validate: {
            isEmail: true,
        }
    },
    urlRepository: {
        type: type.STRING,
        allowNull: true,
        validate: {
            isUrl: false
        }
    },
    state: {
        type: type.STRING,
        allowNull: true,
        defaultValue: "Disponible"
    },
    logicState: {
        type: type.BOOLEAN,
        allowNull: false,
        defaultValue: true,
    }
    }, {timestamps: false});
}

module.exports = Project; 
