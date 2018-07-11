const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
const models = path.resolve('server', 'models');

mongoose.connect('mongodb://localhost/1955');

fs.readdirSync(models).forEach(file => {
  if (file.indexOf('.js') >= 0) {
    require(path.join(models, file));
  }
});
