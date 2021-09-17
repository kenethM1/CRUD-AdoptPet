const authController = require('../Controllers/authController');
const verify = require("../libs/verifyToken");
const express = require('express');
const router = express.Router();
const UsersController = require('../Controllers/UsersController')
const Usuario = require("../model/usuario");
const checkRoleAuth = require('../libs/tipoUser');

router.post("/signup", authController.signupController);

router.post("/signin", authController.signinController);

router.get("/logout", authController.logout);

router.get('/AllUser', verify.verifyToken, checkRoleAuth(['admin']), UsersController.getUsers);

router.get("/me", verify.verifyToken, checkRoleAuth(['admin']), authController.getProfile);

router.get('/getUserById/:id', verify.verifyToken, checkRoleAuth(['admin']), UsersController.getUsersById);

module.exports = router;
