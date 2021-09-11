const express = require('express');
const router = express.Router();
const Donation = require('../model/Donation');
const Verify = require("../libs/verifyToken");
const DonationController = require('../Controllers/DonationController');
const { verify } = require('jsonwebtoken');

router.get('/getDonations', DonationController.getDonations);
router.post('/addDonations', DonationController.AddDonation);

module.exports = router;
