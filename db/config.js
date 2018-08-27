require('dotenv').config(); // this is important!
module.exports =
{
    "development": {
      "username": 'root',
      "password": 'root',
      "database": 'freetyme_db',
      "host": '127.0.0.1',
      "port": 3306,
      "dialect": "mysql"
    },
    "test": {
      "username": "root",
      "password": 'root',
      "database": "database_test",
      "host": "127.0.0.1",
      "port": "process.env.DB_PORT",
      "dialect": "mysql"
    },
    "production": {
      "username": "ue1gz2nuqn2i2mnz",
      "password": "n9s00270i2efn1p4",
      "database": "yelxxknsm0xybszc",
      "host": "kavfu5f7pido12mr.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
      "port": 3306,
      "dialect": "mysql"
    }
  }  