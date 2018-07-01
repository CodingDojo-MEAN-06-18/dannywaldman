let express = require('express');
let app = express();

let cats = {
 'vito' : {
    'path': '/images/cat1.jpeg',
    'food': 'Cat Nip',
    'age': 10,
    'spots': [
        'Window',
        'Closet'
    ]
 },
 'cuddles': {
    'path': '/images/cat2.jpeg',
    'food': 'Pickles',
    'age': 5,
    'spots': [
        'Floor',
        'Bed'
    ]    
 }
};

app.use(express.static(`${__dirname}/static`));
app.set('view engine','ejs');

app.get('/cats', function(request, response){
  response.render('cats', {'cats':cats});
});

app.get('/cats/vito', function(request, response){
    response.render('details', {'cat': 'Vito', 'details': cats['vito']});   
});

app.get('/cats/cuddles', function(request, response){
    response.render('details', {'cat': 'Cuddles', 'details': cats['cuddles']});   
});

app.listen(8000, function(){
    console.log('server listening on port 8000');
});
