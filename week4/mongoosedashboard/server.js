const express = require('express');
const path = require('path');
const app = express();
const routes = require('./routes');
const session=require("express-session")
const bodyparser = require('body-parser');
const flash=require("express-flash");
const engine = require( 'ejs-locals' );
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/wolf_dashboard')

app.use(express.static(path.join(__dirname, './public')));
app.use(session({
  secret: 'secret',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}));
app.use(flash());
app.use(bodyparser.urlencoded({ extended : true }));

app.engine('ejs', engine);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', routes.index);
app.get('/wolves/new', routes.new);
app.post('/wolves', routes.create);
app.get('/wolves/:id', routes.show);
app.get('/wolves/edit/:id', routes.edit);
app.post('/wolves/:id', routes.save);
app.get('/wolves/destroy/:id', routes.destroy);//i know this is evil, I need to save some time and move on

app.listen(8000, () => console.log('listening on port 8000'))
