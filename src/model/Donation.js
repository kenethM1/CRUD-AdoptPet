const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const donacionSchema = Schema({
  nombreDonante: String,
  motivoDonacion: String,
  PetName: String,
  Age: String,
  Description: String,
  Images: [{
    image: String
  }],
  meta: {
    DateCreated: String
  }
});

const Donation = module.exports = mongoose.model('Donations', donacionSchema);