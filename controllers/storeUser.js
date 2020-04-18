const User = require('../models/User.js')
const path = require('path')

module.exports = (req, res)=>{
    let username = req.body.username
    let password = req.body.password
    let confirm = req.body.confirm

    if (password == confirm) {
        User.create({username:username, password:password}, (error, user)=>{
            if (error) {
                res.redirect('/auth/register')
                res.send(error)
            }
            res.redirect('/')
        })
    }
    else {
        res.send("Password and does not match!")
    }
}