const express = require('express')
const usersRouter = require('./routes/usersRouter')
var bodyParser = require('body-parser');
const postsRouter = require('./routes/postsRouter')
const mongoose = require('mongoose')
const app = express()
const PORT = process.env.PORT || 5000

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


