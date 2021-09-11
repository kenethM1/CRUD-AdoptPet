const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DonationSchema = Schema({
  nombreDonante: String,
  motivoDonacion: String,
  NombreMascota: String,
  description: String,
  edad: String,
  raza: String,
  tamanio: String,
  peso: String
});

const Donation = module.exports = mongoose.model('Donations', DonationSchema);
