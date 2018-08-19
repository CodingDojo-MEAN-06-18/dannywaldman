const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator');

const PetTypeSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: [true, "Name is required"], 
        minlength: [3, 'Name must be at least 3 characters'],
        unique: true,
    }
}, { timestamps: true });

PetTypeSchema.plugin(uniqueValidator, { message: '{PATH} needs to be unique' });
 
mongoose.model('PetType', PetTypeSchema);

module.exports = mongoose.model("PetType");