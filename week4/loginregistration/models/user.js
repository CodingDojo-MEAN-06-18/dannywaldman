const mongoose = require('mongoose')
const validate = require('mongoose-validator')
const validator = require('validator')

const UserSchema = new mongoose.Schema({
    email: { type: String, required: true, minlength: 2, validate: {validator(email){return validator.isEmail(email)}, message: 'email is not valid'}},
    password: { type: String, required: true, minlength: 8,  validate: { validator: (val) => (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/).test(val), message: 'password must be 8 chars with one numner and one upper case'}},
    first_name: { type: String, required: true, minlength: 2 },
    last_name: { type: String, required: true, minlength: 2 },
    dob : { type: Date, required: true}
}, { timestamps: true });


mongoose.model('User', UserSchema);
mongoose.connect('mongodb://localhost/loginregister');
