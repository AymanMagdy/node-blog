const express = require('express')
var bodyParser = require('body-parser');
const User = require('../models/userModel')
const app = express.Router();
app.use(bodyParser.json());


// Selecting all the users from the database
app.get('/', (req, res) => {
    if (err) throw err;
    const getAllDataPromise = dbo.promisify(db.db("blog-post"))
    getAllDataPromise.collection("users").find({}).toArray()
    getAllDataPromise(err, data)
        .then(data => {
            res.send(JSON.stringify(data))
            db.close()
        })
        .catch(err => {
            res.send(JSON.stringify(err))
        })
})


// Selecting a user based on an id.
app.get('/:id', (req, res) => {
    usertId = req.params.id
    if (err) throw err;
    var dbo = db.db("blog-post");
    const getPostPromise = dbo.promisify(db.db("blog-post"))
    getPostPromise.collection("posts").find({id: userId}).toArray();
    getPostPromise(err, data)
    .then(data => {
        res.send(JSON.stringify(data))
        db.close()
    })
    .catch(err => {
        res.send(JSON.stringify(err))
    })
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
    const updateUserPromise = dbo.promisify(db.db("blog-post"))
    updateUserPromise.collection("users").updateOne(myquery, newvalues)
    .then(data => {
        res.send(JSON.stringify(data))
        dbo.close()
    })
    .catch(err => {
        res.send(JSON.stringify(err))
    })
})

// Deleting a user.
app.delete('/:id', (req, res) => {
    if (err) throw err;
    var dbo = db.db("blod-post");
    var myquery = { postId: req.params.id };
    dbo.collection("users").deleteMany(myquery)
    .then(data => {
        res.send('Deleted a user')
    })
    .catch(error => {
        res.send("An error occoured.")
    })
})

module.exports = app