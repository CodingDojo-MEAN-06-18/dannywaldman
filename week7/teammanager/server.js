const express = require('express');
const app = express();
const bodyparser = require('body-parser');

app.use(express.static(require('path').join(__dirname, './public/dist/teammanager')))
    .use(bodyparser.urlencoded({ extended: true }))
    .use(bodyparser.json())
    .listen(8000, () => console.log('listening on port 8000'));

require('./server/config/routes.js')(app)
require('./server/config/db.js');