const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AdoptionSchema = Schema({
  userId: String,
  nombreSolicitante: String,
  telefono: String,
  correo: String,
  nombreMascota: String,
  edad: String,
  raza: String,
  motivoAdopcion: String,
  domicilio: String,
  petId: String,
  isAdopted: Boolean
});

const Adoption = module.exports = mongoose.model('Adoptions', AdoptionSchema);
