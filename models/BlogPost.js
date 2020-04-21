const mongoose = require('mongoose')
const Schema = mongoose.Schema

const BlogPostSchema = new Schema({
  title: String,
  description: String,
  userid: {
    type:String,
    ref:'User',
    required: true
  },
  postedDate: {
    type: Date, default: new Date()
  }
})

const BlogPost = mongoose.model('BlogPost', BlogPostSchema)

module.exports = BlogPost
