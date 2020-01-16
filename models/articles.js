const mongoose = require('mongoose')
const connection = require('../mongdb/db.js')

const articlesSchema = new mongoose.Schema({
    user_name: String,
    user_id: String,
    avatar: String,
    question: String,
    content: String,
    star: String,
    comments: String,
    user_id: String,
    createTime: String,
    lastModifyTime: String,
    main_img: String,   
})

const articles = connection.model('articles',articlesSchema)

module.exports = articles