const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
var uniqueValidator = require('mongoose-unique-validator')
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    ip: {
        type: String
    }
})

UserSchema.plugin(uniqueValidator)

// UserSchema.pre('save', function(next) {
//     const user = this

//     // encrypt the password 10 times then store the resulted hash
//     bcrypt.hash(user.password, 10, (error, hash)=>{
//         user.password = hash
//         next()
//     })
// })

const User = mongoose.model('User', UserSchema)
module.exports = User