module.exports = (sequelize, DataTypes) => {
    const Meetings = sequelize.define('Meetings', {
        startTime: DataTypes.DATE,
    });
    Meetings.associate = function(models) {
        Meetings.hasMany(models.User, {through: models.UserMeetings});
    }
}