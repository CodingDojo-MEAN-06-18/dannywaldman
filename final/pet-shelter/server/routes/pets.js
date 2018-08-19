const PetController = require('../controllers/pets');
const router = require('express').Router();

module.exports = router
    .get('/list', PetController.List)
    .get('/petTypes', PetController.PetTypes)
    .post('/new', PetController.New)
    .get('/:id', PetController.Get)
    .put('/edit', PetController.Edit)
    .put('/:id/like', PetController.Like)
    .delete('/:id', PetController.Destroy);