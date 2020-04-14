const mongoose = require('mongoose')
const BlogPost = require('./models/BlogPost')

mongoose.connect('mongodb://localhost/my_database', {useNewUrlParser:true, useUnifiedTopology: true})

// BlogPost.create({title: '1',
// 		 body: '2'}, (error, blogpost) => {
// 			console.log(error, blogpost)
// })

console.log("2")
