var express = require('express');
var ejs = require('ejs');
var path = require('path');
var app = express();

app.use(express.static(path.join(__dirname, './static')));
app.set('view engine', 'ejs');
require('./routes/index.js')(app, app.listen(8000, () => console.log('listening on port 8000')));
