const express = require('express');
const router = express.Router();
const Donation = require('../model/Donation');
const Verify = require("../libs/verifyToken");
const DonationController = require('../Controllers/DonationController');
const { verify } = require('jsonwebtoken');
const checkRoleAuth = require('../libs/tipoUser');

router.get('/getDonations', Verify.verifyToken, checkRoleAuth(['admin']), DonationController.getDonations);
router.post('/addDonations', Verify.verifyToken, checkRoleAuth(['admin']), DonationController.AddDonation);

module.exports = router;
