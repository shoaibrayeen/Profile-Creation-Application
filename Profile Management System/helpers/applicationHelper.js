var UserObj = require('../models/users.js');
const bcrypt = require('bcrypt');
//var redis = require('./redisHelper.js')

function response200(){
    let response = {
        status: 'success',
        statusCode: '2XX',
        message: 'Not Found'
    }
    return response;
}

const authUser = (body) => {
    UserObj.credentials.getUser(body.username, function(err, rows) {
        if(err) {
            return 0; // Db error
        }
        else {
            if (!rows.length) {
                return 2; // User Not Found
            }
            else {
                bcrypt.compare(body.password, rows[0].password).then(function(match) {
                    if(match) {
                        return 1; //Authenticated
                    }
                    else {
                        return 3; //Password is incorrect
                    }
                });
            }
        }
    });
};

module.exports = {
    response200: response200,
    authUser: authUser
}
