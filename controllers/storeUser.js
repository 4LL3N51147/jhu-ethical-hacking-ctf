const User = require('../models/User.js')
const path = require('path')

module.exports = (req, res)=>{
    let username = req.body.username
    let password = req.body.password
    let confirm = req.body.confirm

    if (password == confirm) {
        User.create({username:username, password:password}, (error, user)=>{
            if (error) {
                const validationErrors = Object.keys(error.errors).map(key=>error.errors[key].message)
                req.flash('validationErrors', validationErrors)
                req.flash('data', req.body)
                return res.redirect('/auth/register')
            }
            return res.redirect('/')
        })
    }
    else {
        req.flash('validationErrors', validationErrors)
    }
}