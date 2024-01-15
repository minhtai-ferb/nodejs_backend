require("dotenv").config();
// Create the connection to database
const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT, //default: 3306
  password: process.env.DB_PASSWORD, //default: empty
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
});

module.exports = connection;
