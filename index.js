const express = require('express')
const usersRouter = require('./routes/usersRouter')
const postsRouter = require('./routes/postsRouter')
const mongoose = require('mongoose')
const app = express()
const PORT = process.env.PORT || 5000
var bodyParser = require('body-parser');
var session = require('express-session')

app.set('trust proxy', 1)
app.use(session({
  secret: 'lib api',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}))

app.use('/users', usersRouter)
app.use('/posts', postsRouter)
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/blog-app', (err) => {
    if(!err) console.log("Connected to the DB.");
    console.log(err);
})

app.listen(PORT, (err) => {
    if(!err) console.log(`Listening on port ${PORT}`);
    else console.log(err);
})


