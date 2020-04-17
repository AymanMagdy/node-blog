const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    firstName: { type: String, required: true, maxlength: 20, minlength: 3},
    lastName: {type: String, required: true, maxlength: 20, minlength: 3},
    password: {type: String, required: true,  minlength: 8},
    dob: {type: Date, required: true},
    gender: {type: String, enum: ['m', 'f']},
    email: {type: String, match: /.+@.+\..+/, unique: true},
    number: {type: String, maxlength: 11, minlength: 11, required: true, unique: true}
})

const userModel = mongoose.model('User', userSchema)
module.exports = userModel