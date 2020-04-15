const User = require('../models/User')

module.exports = (req, res)=>{
    const {username, password} = req.body
    query = {username:username, password:password}
    console.log(query)
    User.findOne(query, (error, user)=>{
        if (user){
            res.redirect('/home')
        }
        else{
            console.log(error, user)
        }
    })
}