const express = require('express');
const router = express.Router();
const Organization = require('../model/Organization');


router.post('/addOrganization', async (req, res, next) => {
  const organization = new Organization(req.body);
  organization.meta = {
    DateCreated: new Date().toISOString()
  }
  try {
    await organization.save();
  } catch (error) {
    res.status(400).send({ "error": error })
  };
  res.status(200).send(organization);
});


router.get('/editOrganization/:id', async (req, res, next) => {
  const organization = await Organization.findById(req.params.id);
  console.log(organization)
  res.render('edit', { task: organization });
});

router.post('/editOrganization/:id', async (req, res, next) => {
  const { id } = req.params;
  await Organization.update({ _id: id }, req.body);
  res.redirect('/');
});

router.get('/deleteOrganization/:id', async (req, res, next) => {
  let { id } = req.params;
  await Organization.remove({ _id: id });
  res.redirect('/');
});

router.get('/getAllOrganization', async (req, res) => {
  try {
    const organization = await Organization.find();
    res.send(organization);
  } catch (error) {
    res.json(error.title);
  }
});



module.exports = router;
