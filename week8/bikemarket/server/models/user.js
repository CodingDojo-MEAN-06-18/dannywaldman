const uniqueValidator = require('mongoose-unique-validator');
const validator = require('validator');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const { Schema } = mongoose;
const userSchema = new Schema({
  username: {
    type: String,
    required: [true, "Username is required and must be at least 5 characters."],
    unique: true,
    minlength: 5
  },
  email: {
    type: String,
    required: [true, "Username is required and must be a valid address."],
    unique: true,
    validate: {
      validator(value) {
        return validator.isEmail(value);
      },
    },
  },  
  password: {
    type: String,
    required: [true, "Password is required and must be at least 8 characters."],
    required: true,
    minlength: 8
  },
  locked:{
    type: Date
  },
  failed:{
    type: Number
  }
}, { timestamps: true});

userSchema.plugin(uniqueValidator, { message: '{PATH} needs to be unique' });

userSchema.pre('save', function(next) {
  if (!this.isModified('password')) {
    return next();
  }

  bcrypt
    .hash(this.password, 10)
    .then(hashed => {
      this.password = hashed;
      next();
    })
    .catch(next);
});

userSchema.statics.validatePassword = function(
  candidatePassword,
  hashedPassword
) {
  return bcrypt.compare(candidatePassword, hashedPassword);
};

module.exports = mongoose.model('User', userSchema);