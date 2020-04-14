const mongoose = require('mongoose')
const Schema = mongoose.Schema

const BlogPostSchema = new Schema({
  title: String,
  description: String,
  username: String,
  postedDate: {type: Date, default: new Date()},
  image: String
})

const BlogPost = mongoose.model('BlogPost', BlogPostSchema)

module.exports = BlogPost
