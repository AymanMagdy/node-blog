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
    res.send('Adding a new post.')
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