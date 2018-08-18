const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const session = require('express-session');
const cookieParser = require('cookie-parser');

const port = process.env.PORT || 8001;
const app = express();

const sessionConfig = {
  saveUninitialized: true,
  secret: 'session-secret',
  resave: false,
  name: 'session',
  rolling: true,
  cookie: {
    secure: false,
    httpOnly: false,
    maxAge: 3600000,
  },
};

const cookieSecret = process.env.COOKIE_SECRET || ';alsfkjals;dkfj;alskdfj;alskdfj';

require('./server/config/database');

app
  .use(bodyParser.urlencoded({ extended: true }))
  .use(bodyParser.json())
  .use(express.static(path.resolve('public/dist')))
  .use(cookieParser(cookieSecret))
  .use(session(sessionConfig))
  .use('/api', require('./server/routes'))
  .use(require('./server/routes/catch-all.route'))
  .listen(port, () => console.log(`Express server listening on port ${port}`));