const quotes = require('../controllers/quotes.js')

module.exports = app => {
    app.get('/', ( req, res ) => {
            quotes.index(req, res);
        })

    app.post('/quotes', ( req, res ) => {
            quotes.create(req, res);
        })

    app.get('/quotes', ( req, res ) => {
            quotes.fetch(req, res);
        })
    }

