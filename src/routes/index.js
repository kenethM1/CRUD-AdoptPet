const express = require('express');
const router = express.Router();
const Pet = require('../model/Pet');
const validate = require("../utils/PetValidation");
const Verify = require("../libs/verifyToken");
const PetController = require('../Controllers/PetController');
const { verify } = require('jsonwebtoken');

router.get('/', async (req, res) => {
  res.redirect('/getAllPets');
});

router.post('/addPet', Verify.verifyToken, PetController.AddPet);

router.get('/edit', Verify.verifyToken, PetController.EditPet);

router.get('/delete/:id', Verify.verifyToken, PetController.EditPet);

router.get('/getPetById/:id' ,PetController.getPetsById);

router.get('/getAllPets', PetController.getAllPets);

router.post('/GetPetsByOrganization', Verify.verifyToken, PetController.GetPetByOrganization);




module.exports = router;
