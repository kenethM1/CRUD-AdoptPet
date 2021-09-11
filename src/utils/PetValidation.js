const PetModel = require('../model/Pet');

const validate = async function validatePet(Pet) {

    const { PetName: newPetName, Organization: newPetOrganization, Age: NewPetAge } = Pet;
    const PetMaxAge = 25;

    const existPet = await PetModel.find({ PetName: newPetName, Organization: newPetOrganization, Age: NewPetAge });

    if (existPet.length > 0) {
        return false;
    };

    if (!newPetName || !newPetOrganization || NewPetAge > PetMaxAge) {
        return false;
    };

    return true;

}

module.exports = validate; 