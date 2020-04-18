
const bcrypt = require('bcrypt')
const User = require('../models/User')

module.exports = (req, res)=>{
    const {username, password} = req.body

    User.findOne({username: username}, (error, user)=>{
        if (user){
            bcrypt.compare(password, user.password, (error, isSame)=>{
                if (isSame) {
                    res.redirect('/home')
                }
                else {
                    res.redirect('/auth/login')
                }
            })
        }
        else{
            res.send('User not found')
        }
    })
}