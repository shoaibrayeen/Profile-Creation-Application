var UserObj = require('../models/users.js');
var applicationHelper = require('../helpers/applicationHelper.js');

const index = (req, res) => {
	res.status(200).send({
        status: 'success',
        statusCode: '2XX',
        message: 'Not Found'
    })
};

const getUserCredentialByUsername = (req, res) => {
    UserObj.credentials.getUser(req.params.username, function(err,rows) {
        if(err)
        {
            res.json(err);
        }
        else
        {
            var result = {};
            if (!rows.length) {
                result.message = 'User Not Found'
            }
            else {
                result.message = 'User Found'
            }
            result.status = 'success';
            result.statusCode = '2XX';
            result.data = rows
            res.json(result);
        }

    });
};

const getUserByUsername = (req, res) => {
    UserObj.users.getUserByUsername(req.params.username, function(err,rows) {
        if(err)
        {
            res.json(err);
        }
        else
        {
            var result = {};
            if (!rows.length) {
                result.message = 'User Not Found'
            }
            else {
                result.message = 'User Found'
            }
            result.status = 'success';
            result.statusCode = '2XX';
            result.data = rows
            res.json(result);
        }

    });
};

const getAllUsers = (req, res) => {
    UserObj.users.getAllUsers(function(err, rows) {
        if(err) {
          res.json(err);
        }
        else {
            var result = {};
            if (!rows.length) {
                result.message = 'No Users!'
            }
            else {
                result.message = 'Users Found'
            }
            result.status = 'success';
            result.statusCode = '2XX';
            result.data = rows
            res.json(result);
        }
    });
};

const addUser = (req, res) => {
    UserObj.users.addUser(req.body, function(err,count){
        if(err)
        {
            res.json(err);
        }
        else{
            var result = {};
            result.message = 'Users Created!'
            result.status = 'success';
            result.statusCode = '2XX';
            result.data = req.body;
            res.json(result);
        }
    });
};

const addCredential = (req, res) => {
    UserObj.credentials.addCredential(req.body, function(err,count){
        if(err)
        {
            res.json(err);
        }
        else{
            var result = {};
            result.message = 'Users Credential Added!'
            result.status = 'success';
            result.statusCode = '2XX';
            result.data = req.body;
            res.json(result);
        }
    });
};

const updateUserByUsername = (req, res) => {
    UserObj.users.updateUserInfo(req.params.username, req.body, function(err,rows){
        if(err)
        {
            res.json(err);
        }
        else
        {
            var result = {};
            result.message = 'User Updated!'
            result.status = 'success';
            result.statusCode = '2XX';
            result.data = rows;
            res.json(result);
        }
    });
};

const updateUserCredentialByUsername = (req, res) => {
    UserObj.credentials.updatePassword(req.params.username, req.body, function(err,rows){
        if(err)
        {
            res.json(err);
        }
        else
        {
            var result = {};
            result.message = 'Password Updated!s'
            result.status = 'success';
            result.statusCode = '2XX';
            result.data = rows;
            res.json(result);
        }
    });
};

const inactiveUser = (req, res) => {
    UserObj.credentials.inactiveUser(req.params.username, function(err,rows){
        if(err)
        {
            res.json(err);
        }
        else
        {
            var result = {};
            result.message = 'User Inactive Successfully!'
            result.status = 'success';
            result.statusCode = '2XX';
            result.data = rows;
            res.json(result);
        }
    });
};

const activeUser = (req, res) => {
    UserObj.credentials.activeUser(req.params.username, function(err,rows){
        if(err)
        {
            res.json(err);
        }
        else
        {
            var result = {};
            result.message = 'User Inactive Successfully!'
            result.status = 'success';
            result.statusCode = '2XX';
            result.data = rows;
            res.json(result);
        }
    });
};


module.exports = {
    index: index,
    getUserByUsername: getUserByUsername,
    getUserCredentialByUsername: getUserCredentialByUsername,
    getAllUsers: getAllUsers,
    addUser: addUser,
    addCredential: addCredential,
    updateUserByUsername: updateUserByUsername,
    updateUserCredentialByUsername: updateUserCredentialByUsername,
    inactiveUser: inactiveUser,
    activeUser: activeUser
};