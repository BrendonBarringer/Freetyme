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
      "username": "root",
      "password": 'root',
      "database": "freetyme_db",
      "host": "127.0.0.1",
      "port": "process.env.DB_PORT" || 3306,
      "dialect": "mysql"
    }
  }  