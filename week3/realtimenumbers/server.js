const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname,'./public')));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

require('./routes/index.js')(app, app.listen(8000, ()=> console.log('listening on 8000')));
