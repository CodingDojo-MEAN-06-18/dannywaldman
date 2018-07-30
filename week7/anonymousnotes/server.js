const express = require('express');
const path = require('path');
const app = express();
const session = require("express-session")
const bodyparser = require('body-parser');

app.use(express.static(path.join(__dirname, '/public/dist/anonymousnotes')));
app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}));

app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

require('./server/config/routes.js')(app)
require('./server/config/mongoose.js');

app.listen(8000, () => console.log('listening on port 8000'))