const notes = require('../controllers/notes.js')
const path = require('path');

module.exports = app => {    
    app.post('/add', (req, res, next) => notes.add(req, res, next));
    app.get('/fetch', (req, res, next) => notes.fetch(req, res, next));
    app.all('*', (req, res, next) => notes.index(req, res, next));
}
