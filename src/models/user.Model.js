const mongoose = require('mongoose')

const userSchema = mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    }, role: {
        type: [String],
        default: ['user']
    }, email: {
        type: String,
        required: true
    }, hashedPassword: {
        type: String,
        required: true
    }

}, {
    timestamps: true
})


const User = mongoose.model('User', userSchema)

module.exports = User

