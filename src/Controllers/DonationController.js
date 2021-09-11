const jwt = require("jsonwebtoken");
const Donation = require("../model/Donation");

exports.AddDonation = async (req, res) => {
    const donation = new Donation(req.body);
    donation.meta = {
      DateCreated: new Date().toISOString()
    }
    await donation.save();
    res.status(200).send(donation);
  }
  

exports.getDonations = async (req, res) => {
  try {
    const donation = await Donation.find();
    res.status('200').send(donation);
  } catch (error) {
    res.json(error.title);
  }

exports.getDonationsById = async (req, res) => {
    try {
      const donation = await Pet.where({_id: req.params.id}).select().then(function(pet){
        res.send(pet);
        });
      } catch (error) {
       res.json(error.title);
      }
  };
 
};
