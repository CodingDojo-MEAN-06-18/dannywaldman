const mongoose = require('mongoose');

const quoteSchema = new mongoose.Schema({
    name : { type : String, required : true},
    date : { type : Date, default : Date.now},
    quote: { type : String, required : true }
    });

const Quote = mongoose.model('quotes', quoteSchema);

mongoose.model( 'quotes', quoteSchema );
mongoose.connect( 'mongodb://localhost/quotes');

module.exports = app => {
    app.get('/', ( req, res ) => {
        res.render('index', {title : 'Quoting Dojo'});
        })

    app.post('/quotes', ( req, res ) => {
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
        })

    app.get('/quotes', ( req, res ) => {
            Quote.find()
                .sort('-date')
                .exec((err, quotes) => {
                    if( err ) return next( err );
                    res.render( 'show', {
                        title : 'Here are some awesome quotes',
                        quotes : quotes
                        });            
                    });
        })
    }

