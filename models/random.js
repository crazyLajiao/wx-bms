const mongoose = require('mongoose')
const connection = require('../mongdb/db.js')

const commentSchema = new mongoose.Schema({
    user_name: String,
    content: String,
})
const randomSchema = new mongoose.Schema({
    id: Number,
    article_id: Number,
    imgUrl: String,
    user_id: Number,
    user_avatar: String,
    user_name: String,
    title: String,
    content:String,
    star: {
        type: Number,
        default: 0
    },
    comments: {
        type: Number,
        default: 0
    },
    comment_content: [{
        ref:commentSchema
    }],
})
const random = connection.model('random',randomSchema)


module.exports =  random;