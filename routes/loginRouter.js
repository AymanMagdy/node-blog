const express = require('express')
const session = require('express-session');
var bodyParser = require('body-parser');
const User = require('../models/userModel')
const app = express.Router();
app.use(bodyParser.json());

// Addding a specific user to the db with a post request.
app.post('/login', (req, res) => {
    loginEmail: req.params.email
    loginPassword: req.params.password
    var dbo = db.db("blog-post");
    const getPostPromise = dbo.promisify(db.db("blog-post"))
    getPostPromise.collection("users").find({email: loginEmail, password: loginPassword}).toArray();
    getPostPromise(err, data)
    .then(data => { // Adding the user to the session.
        app.use(session({
            loggedUser: data
        }));
        res.statusCode = 200;
        db.close()
    })
    .catch(err => {
        res.send(JSON.stringify(err))
    })
    
})

module.exports = app