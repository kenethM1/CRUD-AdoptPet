const express = require('express');
const router = express.Router();
const Adoption = require('../model/Adoption');
const Verify = require("../libs/verifyToken");
const AdoptionController = require('../Controllers/AdoptionController');
const { verify } = require('jsonwebtoken');

router.get('/', async (req, res) => {
  res.redirect('/getAllFormularios');
});

router.post('/addFormulario', Verify.verifyToken, AdoptionController.AddFormularioAdopcion);

router.get('/editFormulario', Verify.verifyToken, AdoptionController.EditFormulario);

router.get('/deleteFormulario/:id', Verify.verifyToken, AdoptionController.EditFormulario);

router.get('/getAllFormularios', Verify.verifyToken, AdoptionController.getAllFormularios);

router.put('/updateStatusFormulario', Verify.verifyToken, AdoptionController.UpdateStatusAdopcion);

module.exports = router;
