const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;

const userSchema = Schema({
  idUsuario: String,
  nombreUsuario: String,
  telefono: String,
  correo: String,
  direccion: String,
  password: String,
  nombres: {
    PrimerNombre: String,
    SegundoNombre: String,
    PrimerApellido: String,
    SegundoApellido: String
  }
});

userSchema.method('encryptPassword', async function (password) {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(password, salt);
});

userSchema.methods.comparePassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

module.exports = mongoose.model('usuario', userSchema);
