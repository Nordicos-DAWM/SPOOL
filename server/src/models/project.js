
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
    contact_email: {
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
        type: type.INTEGER,
        allowNull: true,
    },
    logical_state: {
        type: type.INTEGER,
        allowNull: true
    }
    }, {timestamps: false});
}

module.exports = Project; 
