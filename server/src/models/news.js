
const News = (sequelize, type) =>{
    return sequelize.define('news', {
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
        allowNull: false,
        defaultValue: true,
    }

    }, {timestamps: false});
}

module.exports = News; 
