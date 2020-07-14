var db = require('../db/connection.js');
const bcrypt = require('bcrypt');
 
var credentials = {
    getAllUsers:function(callback){
        return db.query("Select * from users", callback);
    },
    getUserById:function(id,callback){
        return db.query("select *from users where id=?",[id], callback);
    },
    addUser:function(credentials, callback){
        const saltRounds = 10;
        const hash = bcrypt.hashSync(credentials.password, saltRounds);
        return db.query("Insert into credentials values(?, ?, ?, ?)", [credentials.id, credentials.email, hash, 'active']) 
                && db.query('INSERT INTO users values(?, ?, ?, ?)', [credentials.id, credentials.name, credentials.email, credentials.contact], callback);
    },
    deleteUser:function(id,callback){
        return db.query("update credentials set status='inactive' where id=?",[id],callback);
    },
    updateUser:function(id, credentials, callback){
        const saltRounds = 10;
        const hash = bcrypt.hashSync(credentials.password, saltRounds);
        return db.query("update credentials set password=?, email=? where id=?",[hash, credentials.email, id])
              && db.query("update users set name=?, email=?, contact=? where id=?",[credentials.name, credentials.email, credentials.contact, id], callback);
    }
};

module.exports = credentials;