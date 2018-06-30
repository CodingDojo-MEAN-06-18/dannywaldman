var express = require('express');
var app = express();

app.use(express.static(`${__dirname}/static`));

app.set('views',`${__dirname}/views`);
app.set('view engine','ejs');

app.get('/cars', function(request, response){
    let cars = [
        {'name':'red','path':'/images/red.jpg'},
        {'name':'yellow','path':'/images/yellow.jpeg'},
    ];

    response.render('cars',{images:cars});
});


app.get('/cats', function(request, response){
    let cats = [
        {'name':'cat 1','path':'/images/cat1.jpeg'},
        {'name':'cat 2','path':'/images/cat2.jpeg'},
    ];

    response.render('cats',{images:cats});
});


app.get('/cars/new', function(request, response){
    response.render('form');
});

app.listen(8000, function(){
    console.log('listeniog on port 8000');
});
