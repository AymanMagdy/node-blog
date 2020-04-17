const express = require('express')
var bodyParser = require('body-parser');
const User = require('../models/userModel')
const app = express.Router();
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send("Print all the users here.")
})

app.get('/:id', (req, res) => {
    user_id = req.params.id
    res.send(`Printing a specific user : ${user_id}`)
})

app.post('/', (req, res) => {
    new_user = {
        "firstName": req.body.firstName,
        "lastName": req.body.lastName,
        "password": req.body.password,
        "dob": req.body.dob,
        "gender": req.body.gender,
        "email": req.body.email,
        "number": req.body.number
    }
    var myData = new User(new_user);
    myData.save()
    .then(item => {
      res.send("New user saved to database");
    })
    .catch(err => {
      res.status(400).send(`unable to add user to database ${err}`);
    });
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