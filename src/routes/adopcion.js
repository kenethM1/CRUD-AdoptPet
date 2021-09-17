const express = require('express');
const router = express.Router();
const Adoption = require('../model/Adoption');
const Verify = require("../libs/verifyToken");
const AdoptionController = require('../Controllers/AdoptionController');
const { verify } = require('jsonwebtoken');
const checkRoleAuth = require('../libs/tipoUser');

router.get('/', async (req, res) => {
  res.redirect('/getAllFormularios');
});

router.post('/addFormulario', Verify.verifyToken, AdoptionController.AddFormularioAdopcion);

router.get('/editFormulario', Verify.verifyToken, checkRoleAuth(['admin']), AdoptionController.EditFormulario);

router.get('/deleteFormulario/:id', Verify.verifyToken, checkRoleAuth(['admin']), AdoptionController.EditFormulario);

router.get('/getAllFormularios', Verify.verifyToken, checkRoleAuth(['admin']), AdoptionController.getAllFormularios);

router.put('/updateStatusFormulario', Verify.verifyToken, checkRoleAuth(['admin']), AdoptionController.UpdateStatusAdopcion);

module.exports = router;
