const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    name : { type: String, required : true, minlength : 2 },
    comment : { type : String, required : true, minlength : 2 },
    }, { timestamps : true });

const postSchema = new mongoose.Schema({
    name : { type : String, required : true, minlength : 2 },
    post : { type : String, required : true, minlength : 2 },
    comments : [commentSchema],
}, { timestamps: true });

module.exports = mongoose.model('comment', commentSchema);
module.exports = mongoose.model('post', postSchema);

