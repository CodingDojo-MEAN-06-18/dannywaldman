const Wolf = require('../models/wolf.js')

exports.index = ( req, res, next ) => {
    Wolf.find()
        .exec((err, wolves) => {
            if( err ) return next( err );
            res.render( 'index', { title: "Wolves", wolves : wolves });
            });
    };

exports.new = ( req, res, next ) => {
    res.render( 'new', { title: "Add Wolf" });
    };

exports.create = ( req, res, next ) => {
    new Wolf(req.body)
        .save(err => {
            if(err){
                setErrors(req, err.errors);
                res.redirect(req.url);
            } else {
                req.flash('success', `${req.body.name} added successfully`);
                res.redirect('/');
            }
            });    
    };    

exports.show = ( req, res, next ) => {
    Wolf.find({ _id: req.params.id }, (err, wolves) => {
        if (err){
            setErrors(req, err.errors);
            res.redirect('/');
        } else {
            res.render('show', { title : `View Wolf ${wolves[0].name}`, wolf : wolves[0] });            
        }
        });
    };

exports.edit = ( req, res, next) => {
    Wolf.find({ _id: req.params.id }, (err, wolves) => {
        if (err){
            setErrors(req, err.errors);
            res.redirect('/');
        } else {
            res.render('edit', { title : `Edit Wolf ${wolves[0].name}`, wolf : wolves[0] });            
        }
        });
    };    

exports.save = ( req, res, next ) => {
    Wolf.update({ _id : req.params.id}, req.body, (err, result) => {
        if (err){
            setErrors(req, err.errors);
            res.redirect(req.url); 
        } else {
            req.flash('success', `${req.body.name} updated successfully`);
            res.redirect('/');
        }
        });
    };

exports.destroy = ( req, res, next ) => {
    Wolf.remove({ _id : req.params.id}, (err, result) => {
        if (err){
            setErrors(req, err.errors);
            res.redirect(req.url); 
        } else {
            req.flash('success', `${req.params.id} deleted successfully`);
            res.redirect('/');
        }
        });
    };

const setErrors = ( req, errors) => {
        for ( let key in errors){ 
            req.flash('required', errors[key].message);                    
        }
    };
