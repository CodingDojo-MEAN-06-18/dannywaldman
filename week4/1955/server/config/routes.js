const api = require('../controllers/1955');

module.exports = app => {
  app.get('/', api.index); 
  app.get('/new/:name', api.create); 
  app.get('/remove/:name', api.destroy); 
  app.get('/:name', api.fetch); 
};
