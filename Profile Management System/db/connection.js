var mysql = require('mysql');

var dbConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'PMS'
});

dbConnection.connect(function(err) {
    if (err) throw err;
    console.log("Database Connected!");
});

module.exports = dbConnection;
