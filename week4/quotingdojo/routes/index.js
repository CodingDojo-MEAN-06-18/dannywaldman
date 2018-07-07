const mongoose = require('mongoose');

const quoteSchema = new mongoose.Schema({
    name : { type : String, required : true},
    date : { type : Date, default : Date.now},
    quote: { type : String, required : true }
    });

const Quote = mongoose.model('quotes', quoteSchema);

mongoose.model( 'quotes', quoteSchema );
mongoose.connect( 'mongodb://localhost/quotes');


exports.index = ( req, res, next ) => {
    res.render('index', {title : 'Quoting Dojo'});
    };

exports.create = ( req, res, next ) => {
    new Quote(req.body)
        .save(err => {
            if(err){
                for ( let key in err.errors){
                    req.flash('required', err.errors[key].message);                    
                }
                res.redirect('/');
            } else {
                res.redirect('/quotes');
            }
            });
    };

exports.fetch = ( req, res, next) => {
    Quote.find()
        .sort('-date')
        .exec((err, quotes) => {
            if( err ) return next( err );
            res.render( 'show', {
                title : 'Here are some awesome quotes',
                quotes : quotes
                });            
            });
    };    
