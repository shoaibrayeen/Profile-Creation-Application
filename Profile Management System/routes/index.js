var express = require('express');
var router = express.Router();

/* GET home page. */
var indexControllerObj = require("../controllers/indexController.js");
router.get('/', indexControllerObj.index);

/* Get PING Router*/
var pingControllerObj = require("../controllers/pingController.js");
router.get('/ping', pingControllerObj.index);

/* User Router */
var userControllerObj = require("../controllers/userController.js");
router.get('/users/ping', userControllerObj.index);
router.get('/users', userControllerObj.getAllUsers);
router.get('/users/:username', userControllerObj.getUserByusername);
//router.put('/users/:username', userControllerObj.updateUserInformation);
//router.put('/users/password/:username', userControllerObj.updatePassword)
//router.put('/users/inactive/:username', userControllerObj.inactiveUser);
//router.put('/users/active/:username', userControllerObj.activeUser);
router.post('/users', userControllerObj.createUser);


module.exports = router;
