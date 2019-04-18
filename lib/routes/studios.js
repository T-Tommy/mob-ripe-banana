const { Router } = require('express');
const Studio = require('../models/Studio');

module.exports = Router()
  .post('/', (req, res, next) => {
    const { 
      name,
      address
    } = req.body;

    Studio
      .create({ name, address })
      .then(createdStudio => {
        res.send(createdStudio);
      })
      .catch(next);
  })
  
  .get('/', (req, res, next) => {
    Studio.find()
      .then(studios => {
        res.send(studios);
      })
      .catch(next);
  });