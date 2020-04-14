module.exports = (req, res, next)=>{
	if (res.files == null || req.body.title == null || req.body.description == null || req.body.username == null){
		return res.redirect('/posts/new')
	}
	next()
}