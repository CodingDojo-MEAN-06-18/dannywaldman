const Note = require("../models/note.js");
const path = require('path');

module.exports = {
    index: (req, res, next) => res.sendFile(path.resolve("./public/dist/anonymousnotes/index.html")),
    add: (req, res, next) => {
        Note.create(req.body)
            .then(note => res.json(note))
            .catch(error => res.json(error));
    },
    fetch: (req, res, next) => {
        Note.find({}).sort('-createdAt')
            .then(notes => res.json(notes))
            .catch(error => res.json(error));
    }
}
