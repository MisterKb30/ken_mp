const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'havoc1785',
    database: 'mp_kenneth'
});

//this is the code for my database
module.exports = pool.promise();