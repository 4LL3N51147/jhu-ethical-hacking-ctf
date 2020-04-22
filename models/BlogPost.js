const mongoose = require('mongoose')
const Schema = mongoose.Schema

const BlogPostSchema = new Schema({
  title: {
    type: String,
    required: [true, 'Please provide a title'],
  },
  description: {
    type: String,
    required: [true, 'Please provide a description'],
  },
  userid: {
    type:Schema.Types.ObjectId,
    ref:'User',
    required: true
  },
  postedDate: {
    type: Date, default: new Date()
  }
})

const BlogPost = mongoose.model('BlogPost', BlogPostSchema)

module.exports = BlogPost
