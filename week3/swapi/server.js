var express = require('express');
var ejs = require('ejs');
var path = require('path');
var app = express();

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, './static')));

require('./routes/index.js')(app);

app.listen(8000, () => console.log('listening on port 8000'));
