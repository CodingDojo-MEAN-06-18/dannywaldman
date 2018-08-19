const router = require('express').Router();
const PetRoutes = require('./pets');

module.exports = router.use('/pets', PetRoutes);