const express = require('express')
var bodyParser = require('body-parser');
const User = require('../models/userModel')
const app = express.Router();
app.use(bodyParser.json());


// Selecting all the users from the database
app.get('/', (req, res) => {
    if (err) throw err;
    var dbo = db.db("blog-post");
    const getAllData = dbo.collection("users").find({}).toArray()
    getAllData.then(result => {
        res.send(JSON.stringify(result))
        db.close();
    }).catch(error => {
        if (error)  res.send(`An error occured getting data from DB -> ${error}`);
    })
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
    if (err) throw err;
    var dbo = db.db("blod-post");
    var myquery = { postId: req.params.id };
    dbo.collection("users").deleteMany(myquery, function(err, obj) {
        if (err) throw err;
        res.send(`Updated user with id: ${req.params.id}. \n ${obj}`)
        db.close();
    });
})

module.exports = app