const mongoose = require('mongoose')
const connection = require('../mongdb/db.js')

const randomSchema = new mongoose.Schema({
    id: Number,
    article_id: Number,
    imgUrl: String,
    user_id: Number,
    user_avatar: String,
    user_name: String,
    star: {
        type: Number,
        default: 0
    },
    comments: {
        type: Number,
        default: 0
    }
})
const random = connection.model('random',randomSchema)


module.exports =  random;