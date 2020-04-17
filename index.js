const express = require('express')
const usersRouter = require('./routes/usersRouter')
const postsRouter = require('./routes/postsRouter')

const app = express()
const PORT = process.env.PORT || 5000

app.use('/users', usersRouter)
app.use('/posts', postsRouter)

app.listen(PORT, (err) => {
    if(!err) console.log(`Listening on port ${PORT}`);
    else console.log(err);
})


