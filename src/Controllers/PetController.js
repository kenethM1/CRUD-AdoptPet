const jwt = require("jsonwebtoken");
const Pet = require('../model/Pet');

exports.GetPetByOrganization = async (req, res) => {
    const { Organization } = req.body;
    const { Name } = Organization;

    const pets = await Pet.find({ 'Organization.Name': Name });

    if (pets.length > 0) {
        res.status('200').send(pets);
    }
    else {
        res.status('401').send({ "err": "No existe woof woof" });
    }
};

exports.getAllPets = async (req, res) => {
    try {
      const pets = await Pet.find();
      res.status('200').send(pets);
    } catch (error) {
      res.json(error.title);
    }
  };
  
exports.getPetsById = async (req, res) => {
    try {
      const pet = await Pet.where({_id: req.params.id}).select().then(function(pet){
        res.send(pet);
        });
      } catch (error) {
       res.json(error.title);
      }
  };

exports.ErasePet = async (req, res) => {
    await Verify.verifyToken(req, res, next);
    let { petName, organization } = req.params;

    const mascota = await Pet.findOneAndDelete({ PetName: petName, Organization: organization });

    if (mascota) {
        return res.status("200").json({ Message: "Mascota eliminada, woof woof." });
    }
    else {
        return res.status("401").json({ Message: "No existe esa mascota mi estimado." });
    }
}

exports.EditPet = async (req, res) => {
    var pet = await Pet.findByIdAndUpdate(req.body.id, req.body);
    if (!pet) {
        res.status('400').send({ "error": "Esa mascota no existe jeje" });
    }
    pet = req.body;
    try {
        await pet.save();
    } catch (error) {
        res.json({ "error": error })
    }

    res.status('200').json(pet);
}

exports.AddPet = async (req, res) => {
    const pet = new Pet(req.body);
    pet.meta = {
        DateCreated: new Date().toISOString()
    };

    const isValid = await validate(pet);

    if (isValid) {
        await pet.save();
    }
    else {
        res.status(300).send({ "error": "Este animal no es permitido" });
    }
    res.status(200).send(pet);
}