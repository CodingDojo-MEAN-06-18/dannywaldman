const mongoose = require('mongoose')
const statuses = ['p', 'n', 'u'];

const PlayerSchema = new mongoose.Schema({
    name: { type: String, required: true, minlength: 2 },
    position: { type: String, required: true, minlength: 2 },
    games: {
        1: { status : { type: String, default: 'u', required : true, enum: statuses }},
        2: { status : { type: String, default: 'u', required : true, enum: statuses }},
        3: { status : { type: String, default: 'u', required : true, enum: statuses }}
    },
}, { timestamps: true });
 
mongoose.model('Player', PlayerSchema);

module.exports = mongoose.model("Player");