const mysql = require("mysql2");
const mysqlPool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "sethd",
});

module.exports = mysqlPool;
