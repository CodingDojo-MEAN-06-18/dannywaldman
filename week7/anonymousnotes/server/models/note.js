const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
    note: { type: String, required: true }
}, { timestamps: true });

mongoose.model('note', noteSchema);

module.exports = mongoose.model("note");
