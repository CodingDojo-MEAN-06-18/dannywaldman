module.exports = require('express').Router()
    .use('/github', require('./github.routes'));