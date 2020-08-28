const StudentDetails = (sequelize, type) =>{
    return sequelize.define('studentDetails', {
    id: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    faculty: {
        type: type.STRING,
        allowNull: false
    },
    career: {
        type: type.STRING,
        allowNull: false
    }

    }, {timestamps: false});
}

module.exports = StudentDetails; 
