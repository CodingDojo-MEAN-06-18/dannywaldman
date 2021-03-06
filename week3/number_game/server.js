var express = require('express');
var ejs = require('ejs');
var session = require('express-session');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({ extended : true}));
app.use(express.static(path.join(__dirname, './static')));
app.use(session({
   secret: 'testsecretstuff',
   resave: false,
   saveUninitialized: true,
   cookie: {maxAge: 60000}
   })
);

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

require('./routes/index.js')(app);

app.listen(8000, () => console.log('listening on port 8000'));
