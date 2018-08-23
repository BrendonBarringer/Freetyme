module.exports = (sequelize, DataTypes) => {
    const FreeTime = sequelize.define('FreeTime', {
        startTime: DataTypes.DATE,
        endTime: DataTypes.DATE
    });

    FreeTime.associate = function (models) {
        FreeTime.belongsTo(models.User)
    }
    return FreeTime
}

