const jwt = require("jsonwebtoken");
const Usuario = require("../model/usuario");


exports.getUsersById = async (req, res) => {
  try {
    const usuario = await Usuario.where({idUsuario: req.params.id}).select().then(function(usuario){
      res.send(usuario);
      });
    } catch (error) {
     res.json(error.title);
    }
};

exports.getUsers = async (req, res) => {
    try {
      const usuario = await Usuario.find();
      res.send(usuario);
    } catch (error) {
      res.json(error.title);
    }
  };
  