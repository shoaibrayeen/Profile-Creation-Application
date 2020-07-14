var UserObj = require('../models/users.js');

const index = (req, res) => {
	res.status(200).send({
        status: 'success',
        statusCode: '2XX',
        message: 'User Controller Connected!'
    })
};

const getUserById = (req, res) => {
    UserObj.getUserById(req.params.id, function(err, rows){
        if(err) {
          res.json(err);
        }
        else {
            let result = {};
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
    UserObj.getAllUsers(function(err, rows) {
        if(err) {
          res.json(err);
        }
        else {
          res.json(rows);
        }
    });
};

const deleteUserById = (req, res) => {
    UserObj.deleteUser(req.params.id,function(err,count){

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

const updateUserById = (req, res) => {
    UserObj.updateUser(req.params.id, req.body, function(err,rows){
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
    getUserById: getUserById,
    getAllUsers: getAllUsers,
    deleteUserById: deleteUserById,
    createUser: createUser,
    updateUserById: updateUserById
};