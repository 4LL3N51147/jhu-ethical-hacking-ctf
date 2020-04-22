const BlogPost = require('../models/BlogPost.js')
const User = require('../models/User.js')

module.exports = async (req, res)=>{
    const blogpost = await BlogPost.findById(req.params.id).populate('userid')
    const author = blogpost.userid
    res.render('post', {blogpost, author})
}