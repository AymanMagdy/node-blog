const express = require('express')
const app = express.Router();

app.get('/', (req, res) => {
    res.send("Print all the users here.")
})

app.get('/:id', (req, res) => {
    user_id = req.params.id
    res.send(`Printing a specific user : ${user_id}`)
})

app.post('/', (req, res) => {
    res.send('Adding a new user')
})

app.put('/:id', (req, res) => {
    user_id = req.params.id
    res.send(`Editing a specific user data with id: ${user_id}`)
})

app.delete('/:id', (req, res) => {
    user_id = req.params.id
    res.send(`Deleting a specfic user with id: ${user_id}`)
})

module.exports = app