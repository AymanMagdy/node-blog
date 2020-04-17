const express = require('express')
const app = express.Router()

app.get('/', (req, res) => {
    if (err) throw err;
    var dbo = db.db("blog-post");
    dbo.collection("posts").find({}).toArray(function(err, result) {
        if (err) throw err;
        res.send(JSON.stringify(result))
        db.close();
    });
})


app.get('/:id', (req, res) => {
    postId = req.params.id
    if (err) throw err;
    var dbo = db.db("blog-post");
    dbo.collection("posts").find({id: postId}).toArray(function(err, result) {
        if (err) throw err;
        res.send(JSON.stringify(result))
        db.close();
    });
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


// Updating the post with a specific id.
app.put('/:id', (req, res) => {
    if (err) throw err;
    var dbo = db.db("blog-post");
    var myquery = { 
        postId: req.params.id
     };
    var newvalues = { $set: 
        {
            "postTitle": req.body.postTitle,
            "postBody": req.body.postBody
        } 
    };
    dbo.collection("users").updateOne(myquery, newvalues, function(err, obj) {
        if (err) throw err;
        res.send(`Updated the post with id: ${postId}.\n ${obj}`)
        db.close();
    });
})

app.delete('/:id', (req, res) => {
    if (err) throw err;
    var dbo = db.db("blod-post");
    var myquery = { postId: req.params.id };
    dbo.collection("posts").deleteMany(myquery, function(err, obj) {
        if (err) throw err;
        res.send(`Updated post with id: ${req.params.id}. \n ${obj}`)
        db.close();
    });
})

module.exports = app