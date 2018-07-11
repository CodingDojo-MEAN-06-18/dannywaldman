let mongoose = require('mongoose')
const path = require('path')
const models = path.join(__dirname, '../models')
const fs = require("fs")

mongoose.connect('mongodb://localhost/quotes');

fs.readdirSync(models).forEach(file => {
    if (file.indexOf('.js') >= 0){
        require(path.join(models, file));
    }
})
