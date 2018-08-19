const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const port = process.env.PORT || 8001;
const app = express();

require('./server/config/db');

app
  .use(bodyParser.urlencoded({ extended: true }))
  .use(bodyParser.json())
  .use(express.static(path.resolve('public/dist')))
  .use('/api', require('./server/routes'))
  .use(require('./server/routes/catch-all.route'))
  .listen(port, () => console.log(`Express server listening on port ${port}`));