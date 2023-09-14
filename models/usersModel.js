const mongoose = require('mongoose');
const validator = require('validator');
const userCheme = new mongoose.Schema({
    username: {
        type: String,
        maxLength: [100, 'username can not exceed 100 characters']
    },
    phone: {
        type: String,
    },
    password: {
        type: String,
    },
    gender: {
        type: String
    },
    birthday: {
        type: String,
    }
})
module.exports = mongoose.model('User', userCheme);