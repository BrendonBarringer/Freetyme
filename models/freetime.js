module.exports = (sequelize, DataTypes) => {
    const FreeTime = sequelize.define('FreeTime', {
        startTime: DataTypes.STRING,
        endTime: DataTypes.STRING
    });

    FreeTime.associate = function (models) {
        FreeTime.belongsTo(models.User)
    }
    return FreeTime
}