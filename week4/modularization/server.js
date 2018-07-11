const express = require('express');
const path = require('path');
const app = express();
const session=require("express-session")
const bodyparser = require('body-parser');
const flash=require("express-flash");
const engine = require( 'ejs-locals' );

app.use(express.static(path.join(__dirname, './client/public')));
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
app.set('views', path.join(__dirname, './client/views'));

require('./server/config/routes.js')(app)
require('./server/config/mongoose.js');

app.listen(8000, () => console.log('listening on port 8000'))
