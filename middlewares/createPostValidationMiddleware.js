module.exports = (req, res, next)=>{
	if (req.body.title == '' || req.body.description == ''){
		req.flash('createPostValidationErrors', 'New post has missing component')
		return res.redirect('/createPost')
	}
	next()
}