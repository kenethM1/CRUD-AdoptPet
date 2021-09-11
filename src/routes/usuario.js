const authController = require('../Controllers/authController');
const verify = require("../libs/verifyToken");
const express = require('express');
const router = express.Router();
const UsersController = require('../Controllers/UsersController')
const Usuario = require("../model/usuario");


router.post("/signup", authController.signupController);

router.post("/signin", authController.signinController);

router.get("/logout", authController.logout);

router.get('/AllUser', UsersController.getUsers);

router.get("/me", verify.verifyToken, authController.getProfile);

router.get('/getUserById/:id', UsersController.getUsersById);

module.exports = router;
