const mySql = require("mysql2")

var mysqlConnection = mySql.createConnection({
    host: "localhost",
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    connectionLimit: 10
});

module.exports = mysqlConnection.promise()
