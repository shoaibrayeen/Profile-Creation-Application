var db = require('../db/connection.js');
const bcrypt = require('bcrypt');
 
var credentials = {
    addCredential:function(credentials, callback) {
        const saltRounds = 10;
        const hash = bcrypt.hashSync(credentials.password, saltRounds);
        return db.query('Insert into credentials (`username`, `password`) values(?, ?)', [credentials.username, hash], callback);
    },
    inactiveUser:function(username, callback) {
        return db.query("update credentials set status='inactive' where username=?",[username], callback);
    },
    activeUser:function(username, callback) {
        return db.query("update credentials set status='active' where username=?",[username], callback);
    },
    getUser:function(username, callback) {
        return db.query('select *from credentials where username=?',[username], callback);
    },
    updatePassword:function(username, credentials, callback) {
        const saltRounds = 10;
        const hash = bcrypt.hashSync(credentials.password, saltRounds);
        return db.query("update credentials set password=? where username=?",[hash, username], callback);
    }
};

var users = {
    getAllUsers:function(callback) {
        return db.query('SELECT * from users', callback);
    },
    getUserByUsername:function(username, callback) {
        return db.query('SELECT *from users where username=?',[username], callback);
    },
    addUser:function(credentials, callback) {
        return db.query('INSERT into users (`username`, `name`, `email`, `contact`) values (?, ?, ?, ?)', [credentials.username, credentials.name, credentials.email, credentials.contact], callback)
    },
    updateUserInfo:function(username, credentials, callback) {
        return db.query("update users set name=?, email=?, contact=? where username=?",[credentials.name, credentials.email, credentials.contact, username], callback);
    }
};

module.exports = {
    credentials: credentials,
    users: users
};
