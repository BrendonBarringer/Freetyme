module.exports = (sequelize, DataTypes) => {
const FreeTime = sequelize.define('FreeTime', {
    startTime: DataType.STRING,
    endTime: DataTypes.STRING
});

FreeTime.associate = function(models){
    FreeTime.belongsTo(Users, {foreignKey: 'User_id'})
}
return FreeTime
}