const express = require('express')
const path = require('path')
const ejs = require('ejs')
const bodyParser = require('body-parser')
const fileUpload = require('express-fileupload')
const mongoose = require('mongoose')
const expressSession = require('express-session')
const flash = require('connect-flash')
const BlogPost = require('./models/BlogPost.js')
const newPostController = require('./controllers/createPost')
const homeController = require('./controllers/home')
const storePostController = require('./controllers/storePost')
const getPostController = require('./controllers/getPost')
const newUserController = require('./controllers/newUser')
const storeUserController = require('./controllers/storeUser')
const loginController = require('./controllers/login')
const loginUserController = require('./controllers/loginUser')
const logoutController = require('./controllers/logout')
const validateMiddleware = require('./middlewares/createPostValidationMiddleware')
const authenticationMiddleware = require('./middlewares/authenticationMiddleware')
const redirectIfAuthticatedMiddleware = require('./middlewares/redirectIfAuthenticatedMiddleware')

mongoose.connect('mongodb://localhost/my_database', {useNewUrlParser:true, useUnifiedTopology: true, useCreateIndex: true})

global.loggedIn = null

const app = new express()
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(expressSession({secret: 'this is the secret'}))
app.use(fileUpload())
app.use(flash())
app.use("*", (req, res, next)=>{
	loggedIn = req.session.userId
	// console.log(req.session)
	next()
})

app.get('/', loginController)

app.get('/home', authenticationMiddleware, homeController)

app.get('/post/:id', authenticationMiddleware, getPostController)

app.get('/createPost', authenticationMiddleware, newPostController)

// app.get('/auth/register', redirectIfAuthticatedMiddleware, newUserController)

app.get('/auth/login', redirectIfAuthticatedMiddleware, loginController)

app.get('/auth/logout', logoutController)

app.post('/posts/store', authenticationMiddleware, validateMiddleware, storePostController)

// app.post('/users/register', redirectIfAuthticatedMiddleware, storeUserController)

app.post('/users/login', redirectIfAuthticatedMiddleware, loginUserController)

app.use((req, res)=>{
	res.render('notFound')
})

app.listen(3000, ()=>{
	console.log('App listening on port 3000')
})