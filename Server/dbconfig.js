
const mySqlq = require("mysql2");


var mysqlConnection = mySqlq.createConnection({
    host: "localhost",
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    connectionLimit: 10
});

module.exports = mysqlConnection.promise()






