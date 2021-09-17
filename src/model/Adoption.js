const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AdoptionSchema = Schema({
  Pet: {
    PetName: String,
    Age: String,
    Description: String,
    Images: [{
      image: String
    }]
  },
  nombreSolicitante: String,
  telefono: String,
  correo: String,
  motivoAdopcion: String,
  Address: {
    City: String,
    Street: String,
    Avenue: String
  },

});

const Adoption = module.exports = mongoose.model('Adoptions', AdoptionSchema);
