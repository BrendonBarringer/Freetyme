module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
      username : DataTypes.STRING,
      password : DataTypes.STRING
      // hash     : DataTypes.STRING,
      // salt     : DataTypes.STRING
    });
  
    User.associate = function(models) {
        // Add relationships here
        User.hasMany(models.FreeTime)
    };

    User.prototype.validPassword = function(password) {
  
      // FIXME - Very simple check to see if password matches
      // console.log("Password from the DB:" , this.password)
      // console.log("Password from the Client :" , password)
      return (this.password === password)
    }
  
    return User;
  };


