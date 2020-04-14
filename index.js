const express = require('express')
const path = require('path')
const ejs = require('ejs')
const bodyParser = require('body-parser')
const fileUpload = require('express-fileupload')
const mongoose = require('mongoose')

const BlogPost = require('./models/BlogPost.js')

mongoose.connect('mongodb://localhost/my_database', {useNewUrlParser:true, useUnifiedTopology: true})

const app = new express()
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(fileUpload())

app.get('/', async (req, res)=>{
	const blogposts = await BlogPost.find({})
	res.render('index', {blogposts: blogposts})
})

app.get('/about', (req, res)=>{
	res.render('about')
})

app.get('/posts/:id', async (req, res)=>{
	const blogpost = await BlogPost.findById(req.params.id)
	res.render('post', { blogpost })
})

app.get('/contact', (req, res)=>{
	res.render('contact')
})

app.get('/create', (req, res)=>{
	res.render('create-post')
})

app.post('/posts/store', async (req, res)=>{
	let image = req.files.image
	image.mv(path.resolve(__dirname, 'public/img', image.name), async (error)=>{
		await BlogPost.create({...req.body, image:'/img/'+image.name}, (error, blogpost) => {
			console.log(blogpost)
			res.redirect('/posts/' + blogpost.id)
		})
	})
})

app.listen(4000, ()=>{
	console.log('App listening on port 4000')
})
