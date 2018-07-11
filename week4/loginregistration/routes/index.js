require('../models/user')
const bCrypt = require('bcrypt-as-promised')
const User = require('mongoose').model('User')

exports.index = ( req, res, next ) => {  
    if ( req.session.user ) {
        res.redirect('/');
    } else {
        res.render('index', { title : 'Login or Register' })    
    }
    };
    

exports.login = ( req, res, next ) => {
   	 	User.findOne({ email: req.body.email })
            .then( user => {
       		   if (!user) {
            	   throw new Error('Invalid user');
                }
                bCrypt.compare(passwordFromForm, storedHashedPassword)
                    .then(()=>{
                        req.session.user = user._id;
                })
        	})
            .catch( error => {
                redirect('/');
            })    
    }

const setErrors = ( req, errors) => {
        for ( let key in errors){
            req.flash('required', errors[key].message);                    
        }
    };
