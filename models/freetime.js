module.exports = (sequelize, DataTypes) => {
    const FreeTime = sequelize.define('FreeTime', {
        // UserId: DataTypes.STRING,
        startTime: DataTypes.DATE,
        endTime: DataTypes.DATE
    });

    FreeTime.associate = function (models) {
        FreeTime.belongsTo(models.User)
    }
    return FreeTime
};
