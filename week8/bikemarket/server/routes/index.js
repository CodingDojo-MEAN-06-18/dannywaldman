 const router = require('express').Router();
 const authRoutes = require('./auth');

 module.exports = router.use('/auth', authRoutes);
