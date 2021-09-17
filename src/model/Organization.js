const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrganizationSchema = Schema({
    Name: String,
    Address: {
      City: String,
      Street: String,
      Avenue: String,
      Lat: String,
      Lon: String
    },
    description: String
});

const Organization = module.exports = mongoose.model('Organization', OrganizationSchema);