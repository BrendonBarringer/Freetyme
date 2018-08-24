const bcrypt = require('bcrypt');
const saltRounds = 10;

module.exports = function(sequelize, DataTypes) {
    var Meeting = sequelize.define("Meeting", {
        startTime: DataTypes.DATE,
    });
  
    Meeting.associate = function(models) {
        // Add relationships here
        Meeting.belongsToMany(models.User, { through: 'UserMeeting' });
    };
    
    return Meeting;
  };


