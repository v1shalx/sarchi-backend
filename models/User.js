const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: String,
    email: String,
    contactNo: String,
    interest: String
});

module.exports = mongoose.model('User', userSchema);
