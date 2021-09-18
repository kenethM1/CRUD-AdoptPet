const jwt = require("jsonwebtoken");
const Adoption = require("../model/Adoption");

exports.getAllFormularios = async (req, res) => {
  try {
    const adoptions = await Adoption.find();
    res.status('200').send(adoptions);
  } catch (error) {
    res.json(error.title);
  }
};


exports.EraseFormulario = async (req, res) => {
  await Verify.verifyToken(req, res, next);
  let { NombreSolicitante } = req.params;

  const adopcion = await Adoption.findOneAndDelete({ nombreSolicitante: NombreSolicitante });

  if (adopcion) {
    return res.status("200").json({ Message: "Formulario Eliminado" });
  }
  else {
    return res.status("401").json({ Message: "No existe el formulario" });
  }
}

exports.EditFormulario = async (req, res) => {
  var adoption = await Adoption.findByIdAndUpdate(req.body.id, req.body);
  if (!adoption) {
    res.status('400').send({ "error": "El formulario no existe" });
  }
  adoption = req.body;
  try {
    await adoption.save();
  } catch (error) {
    res.json({ "error": error })
  }

  res.status('200').json(adoption);
}

exports.AddFormularioAdopcion = async (req, res) => {
  const adoption = new Adoption(req.body);
  
  adoption.meta = {
    DateCreated: new Date().toISOString()
  }
  adoption.isAdopted = false;
  await adoption.save();

  res.status(200).send(adoption);
}

exports.UpdateStatusAdopcion = async (req, res) => {
  const adoption = req.body;
  adoption.isAdopted = true;
  await Adoption.findByIdAndUpdate(req.body._id, adoption);
  res.json(req.body);
}

