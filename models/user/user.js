const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({ 
    email: { type: String, unique: true, lowercase: true},
    password: String,
    username: String,
    gender: { 
        type: String,
        enum: ['MALE', 'FEMALE']
    },
    phone: Number 
});

const User = mongoose.model('User', userSchema);
module.exports = User;