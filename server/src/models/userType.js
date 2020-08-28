
const UserType = (sequelize, type) =>{
    return sequelize.define('userType', {
    id: {
        type: type.INTEGER,
        primaryKey: true,
    },
    type: {
        type: type.STRING,
        allowNull: false
    }
    }, {timestamps: false});
}

module.exports = UserType; 
