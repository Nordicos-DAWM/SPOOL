
const News = (sequelize, type) =>{
    return sequelize.define('News', {
    id: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: type.STRING,
        allowNull: false
    },
    description: {
        type: type.STRING,
        allowNull: false
    },
    date: {
        type: type.DATE,
        allowNull: false
    },
    logicState: {
        type: type.BOOLEAN,
        allowNull: false
    }

    }, {timestamps: false});
}

module.exports = News; 
