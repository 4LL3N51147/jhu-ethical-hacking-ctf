
const bcrypt = require('bcrypt')
const User = require('../models/User')

module.exports = (req, res)=>{
    const {username, password} = req.body

    User.findOne({username: username, password: password}, (error, user)=>{
        if (user) {
            req.session.userId = user._id
            return res.redirect('/home')
        }
        else {
            req.flash('loginErrors', 'Incorrect username and password combination')
            return res.redirect('/auth/login')
        }
    })
}