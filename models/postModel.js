const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    postId: {type: int},
    postTitle: { type: String, required: true, maxlength: 200, minlength: 3},
    postBody: {type: String, required: true, maxlength: 200, minlength: 3}
})

const postModel = mongoose.model('User', postSchema)
module.exports = postModel