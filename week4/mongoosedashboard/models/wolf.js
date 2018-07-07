const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const wolfSchema = new Schema({
    name:  { type : String, required : true },
    color: { type : String, required : true }
    });

module.exports = mongoose.model('Wolf', wolfSchema);

