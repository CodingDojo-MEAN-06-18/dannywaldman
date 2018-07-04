const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, './static')));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

require('./routes/index.js')(app, app.listen(8000, () => console.log('listening on port 8000')));
