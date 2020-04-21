module.exports = (req, res)=>{
    if (req.session.userId) {
        console.log(req.session.userId)
        return res.render('create_post')
    }
    res.redirect('/auth/login')
}