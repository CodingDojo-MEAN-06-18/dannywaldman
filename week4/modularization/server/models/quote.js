const mongoose = require('mongoose');

const quoteSchema = new mongoose.Schema({
    name : { type : String, required : true},
    date : { type : Date, default : Date.now},
    quote: { type : String, required : true }
    });

const Quote = mongoose.model('quotes', quoteSchema);

mongoose.model( 'quotes', quoteSchema );
mongoose.connect( 'mongodb://localhost/quotes');

module.exports = mongoose.model('quotes')
