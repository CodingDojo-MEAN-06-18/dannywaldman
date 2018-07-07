const mongoose = require('mongoose');
require('../models/model');
const Post = mongoose.model('post');
const Comment = mongoose.model('comment');

exports.index = ( req, res, next ) => {
    Post.find({}).then((posts) => {
        res.render("index", { title : "Dojo Message Board", posts : posts });
        }).catch(error => {
            console.log("error: ", error);
            });
    };

exports.post = ( req, res, next ) => {
    Post.create(req.body)
        .then(message => {
            req.flash('success', 'Post added!');
            res.redirect('/');
        })
         .catch(error => {
            setErrors(req, error.errors);
            res.redirect('/');
         });    
    };    

exports.comment = ( req, res, next ) => {
    Comment.create(req.body)
        .then(comment => {
            Post.findById(req.params.id)
            .then(post => {
                post.comments.push(comment);
                post.save()
                .then(() => {
                    req.flash('success', 'Comment added!');
                    res.redirect("/");
                })
            })
            .catch(error => {
            setErrors(req, error.errors);
            res.redirect('/');
            });
        }).catch(error => {
            setErrors(req, error.errors);
            res.redirect('/');
            });
    };    

const setErrors = ( req, errors) => {
        for ( let key in errors){
            req.flash('required', errors[key].message);                    
        }
    };
