var UserObj = require('../models/users.js');
var applicationHelper = require('../helpers/applicationHelper.js')

const index = (req, res) => {
	res.status(200).send({
        status: 'success',
        statusCode: '2XX',
        message: 'Not Found'
    })
};

const getUserByusername = (req, res) => {
    UserObj.credentials.getUser(req.params.username, function(err,rows) {
        if(err)
        {
            res.json(err);
        }
        else
        {
            res.json(rows);
        }

    });
};

const getAllUsers = (req, res) => {
    UserObj.getAllUsers(function(err, rows) {
        if(err) {
          res.json(err);
        }
        else {
          res.json(rows);
        }
    });
};

const deleteUserByusername = (req, res) => {
    UserObj.deleteUser(req.params.username,function(err,count){

        if(err)
        {
            res.json(err);
        }
        else
        {
            res.json(count);
        }

    });
};

const createUser = (req, res) => {
    UserObj.addUser(req.body,function(err,count){
        if(err)
        {
            res.json(err);
        }
        else{
            res.json(req.body);
        }
    });
};

const updateUserByusername = (req, res) => {
    UserObj.updateUser(req.params.username, req.body, function(err,rows){
        if(err)
        {
            res.json(err);
        }
        else
        {
            res.json(rows);
        }
    });
};

module.exports = {
    index: index,
    getUserByusername: getUserByusername,
    getAllUsers: getAllUsers,
    deleteUserByusername: deleteUserByusername,
    createUser: createUser,
    updateUserByusername: updateUserByusername
};