var express = require('express');
var ejs = require('ejs');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({ extended : true}));
app.use(express.static(path.join(__dirname, './static')));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.post('/results', (request, response) => {
    response.render('results', {'details' : {name : request.body.name, location : request.body.location, language : request.body.language, comments : request.body.comments}});            
});

app.listen(8000, () => console.log('listening on port 8000'));
