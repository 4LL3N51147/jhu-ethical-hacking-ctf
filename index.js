const express = require('express')
const path = require('path')
const ejs = require('ejs')
const bodyParser = require('body-parser')
const fileUpload = require('express-fileupload')
const mongoose = require('mongoose')
const BlogPost = require('./models/BlogPost.js')
const newPostController = require('./controllers/createPost')
const homeController = require('./controllers/home')
const storePostController = require('./controllers/storePost')
const getPostController = require('./controllers/getPost')
const newUserController = require('./controllers/newUser')
const storeUserController = require('./controllers/storeUser')
const loginController = require('./controllers/login')
const loginUserController = require('./controllers/loginUser')
const validateMiddleware = require('./middlewares/validationMiddleware')

mongoose.connect('mongodb://localhost/my_database', {useNewUrlParser:true, useUnifiedTopology: true})

const app = new express()
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(fileUpload())
app.use('posts/store', validateMiddleware)

app.get('/', loginController)

app.get('/home', homeController)

app.get('/posts/:id', getPostController)

app.get('/create', newPostController)

// app.get('/auth/register', newUserController)

app.get('/auth/login', loginController)

app.post('/posts/store', storePostController)

// app.post('/users/register', storeUserController)

app.post('/users/login', loginUserController)

app.listen(4000, ()=>{
	console.log('App listening on port 4000')
})
