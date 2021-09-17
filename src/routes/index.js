const express = require('express');
const router = express.Router();
const Pet = require('../model/Pet');
const validate = require("../utils/PetValidation");
const Verify = require("../libs/verifyToken");
const PetController = require('../Controllers/PetController');
const { verify } = require('jsonwebtoken');
const checkRoleAuth = require('../libs/tipoUser');

router.get('/', async (req, res) => {
  res.redirect('/getAllPets');
});

router.post('/addPet', Verify.verifyToken, checkRoleAuth(['admin']), PetController.AddPet);

router.get('/edit', Verify.verifyToken, checkRoleAuth(['admin']), PetController.EditPet);

router.get('/delete/:id', Verify.verifyToken, checkRoleAuth(['admin']), PetController.EditPet);

router.get('/getPetById/:id' , Verify.verifyToken, checkRoleAuth(['admin']),PetController.getPetsById);

router.get('/getAllPets', Verify.verifyToken, checkRoleAuth(['admin']), PetController.getAllPets);

router.post('/GetPetsByOrganization', Verify.verifyToken, checkRoleAuth(['admin']), PetController.GetPetByOrganization);




module.exports = router;
