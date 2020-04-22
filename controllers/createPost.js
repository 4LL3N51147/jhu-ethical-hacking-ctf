module.exports = (req, res)=>{
    if (req.session.userId) {
        return res.render('createPost', {errors: req.flash('createPostValidationErrors')})
    }
    res.redirect('/auth/login')
}