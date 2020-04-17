const express = require('express')
const app = express.Router()

app.get('/', (req, res) => {
    res.send("Print all the posts here.")
})

app.get('/:id', (req, res) => {
    post_id = req.params.id
    res.send(`Printing a specific post : ${post_id}`)
})

app.post('/', (req, res) => {
    new_post = {
        "userId": req.body.userId,
        "postTitle": req.body.postTitle,
        "postBody": req.body.postBody
    }
    var myData = new User(new_post);
    myData.save()
    .then(item => {
      res.send("New post has been saved to database");
    })
    .catch(err => {
      res.status(400).send(`unable to add post to database ${err}`);
    });
})

app.put('/:id', (req, res) => {
    post_id = req.params.id
    res.send(`Editing a post data with id: ${post_id}`)
})

app.delete('/:id', (req, res) => {
    post_id = req.params.id
    res.send(`Deleting a post with id: ${post_id}`)
})

module.exports = app