const express = require('express')
const app = express()
const bodyparser = require('body-parser')

app.use(bodyparser.json())

require('./server/config/database');
require('./server/config/routes')(app);

app.listen(8000)
