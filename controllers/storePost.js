const BlogPost = require('../models/BlogPost.js')
const path = require('path')

module.exports = (req, res)=>{
	BlogPost.create({...req.body, userid: req.session.userId}, (error, blogpost) => {
		res.redirect('/post/'+blogpost._id)
	})
}