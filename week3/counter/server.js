var express = require('express');
var session = require('express-session');
var path = require('path');
var app = express();

app.use(session({
   secret: 'testsecretstuff',
   resave: false,
   saveUninitialized: true,
   cookie: {maxAge: 60000}
   })
);

app.use(express.static(path.join(__dirname, './static')));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function(request, response){
    if (request.session.counter){
        request.session.counter++;
    } else {
        request.session.counter = 1;
    }
    response.render('index', {'counter':request.session.counter});
});

app.get('/add2', function(request, response){
    request.session.counter++;
    response.redirect('/');
});

app.get('/clear', function(request, response){
    request.session.destroy();
    response.redirect('/');    
});

app.listen(8000, function(){
    console.log('listening on port 8000');
});
