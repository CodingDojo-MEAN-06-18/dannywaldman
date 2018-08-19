const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator');

const PetSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: [true, "Name is required"], 
        minlength: [3, 'Name must be at least 3 characters'],
        unique: true,
    },
    description: { 
        type: String, 
        required: [true, "Description is required"], 
        maxlength: [10, 'Description must be less than 10 characters'],
        minlength: [3, 'Descriptione must be at least 3 characters'],
    },
    type: { 
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'PetType', 
            required: [true, "Pet type is required"] 
        },
    skills:{
        type: [String],
        validate: [collection => collection.length <=3, 'A pet can only have up to 3 skills']
    },
    likes: {
        type: Number,
        default: 0
    }
}, { timestamps: true });

PetSchema.plugin(uniqueValidator, { message: '{PATH} needs to be unique' });
 
mongoose.model('Pet', PetSchema);

module.exports = mongoose.model("Pet");