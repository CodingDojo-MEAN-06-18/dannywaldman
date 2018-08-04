module.exports = require('express').Router().all('*', (req, res, next) => {
    res.sendFile(require('path').resolve('./public/dist/githubbattle/index.html'));
});