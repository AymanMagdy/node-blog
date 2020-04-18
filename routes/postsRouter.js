const express = require('express')
const app = express.Router()

app.get('/', (req, res) => {
    if (err) throw err;
    getAllDataPromise.collection("posts").find({}).toArray()
    getAllDataPromise(err, data)
        .then(data => {
            res.send(JSON.stringify(data))
            db.close()
        })
        .catch(err => {
            res.send(JSON.stringify(err))
        })
})


// Get a post with a specific id.
app.get('/:id', (req, res) => {
    postId = req.params.id
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


// Getting posts of a specifc user.
app.get('/users/:id/posts', (req, res) => {
    userId = req.params.id
    if (err) throw err;
    var dbo = db.db("blog-post");
    const getPostPromise = dbo.promisify(db.db("blog-post"))
    getPostPromise.collection("posts").find({userId: userId}).toArray();
    getPostPromise(err, data)
    .then(data => {
        res.send(JSON.stringify(data))
        db.close()
    })
    .catch(err => {
        res.send(JSON.stringify(err))
    })
})

// Adding a new post
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
    const updatePostPromise = dbo.promisify(db.db("blog-post"))
    updatePostPromise.collection("posts").updateOne(myquery, newvalues)
    .then(data => {
        res.send(JSON.stringify(data))
        dbo.close()
    })
    .catch(err => {
        res.send(JSON.stringify(err))
    })
})

app.delete('/:id', (req, res) => {
    if (err) throw err;
    var dbo = db.db("blod-post");
    var myquery = { postId: req.params.id };
    dbo.collection("posts").deleteMany(myquery)
    .then(data => {
        res.send('Deleted a post')
    })
    .catch(error => {
        res.send("An error occoured.")
    })
})

module.exports = app