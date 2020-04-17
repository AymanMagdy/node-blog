const express = require('express')
var bodyParser = require('body-parser');
const User = require('../models/userModel')
const app = express.Router();
app.use(bodyParser.json());


// Selecting all the users from the database
app.get('/', (req, res) => {
    if (err) throw err;
    var dbo = db.db("blog-post");
    dbo.collection("users").find({}).toArray(function(err, result) {
        if (err) throw err;
        res.send(JSON.stringify(result))
        db.close();
    });
})


// Selecting a user based on an id.
app.get('/:id', (req, res) => {
    usertId = req.params.id
    if (err) throw err;
    var dbo = db.db("blog-post");
    dbo.collection("posts").find({id: userId}).toArray(function(err, result) {
        if (err) throw err;
        res.send(JSON.stringify(result))
        db.close();
    });
})


// Addding a specific user to the db with a post request.
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


// update a user details with post request.
app.put('/:id', (req, res) => {
    if (err) throw err;
    var dbo = db.db("blog-post");
    var myquery = { 
        userId: req.params.id
     };
    var newvalues = { $set: 
        {
            "firstName": req.body.firstName,
            "lastName": req.body.lastName,
            "password": req.body.password,
            "dob": req.body.dob,
            "gender": req.body.gender,
            "email": req.body.email,
            "number": req.body.number
        } 
    };
    dbo.collection("users").updateOne(myquery, newvalues, function(err, res) {
        if (err) throw err;
        res.send(`Updated the user with id: ${userId}`)
        db.close();
    });
})

app.delete('/:id', (req, res) => {
    user_id = req.params.id
    res.send(`Deleting a specfic user with id: ${user_id}`)
})

module.exports = app