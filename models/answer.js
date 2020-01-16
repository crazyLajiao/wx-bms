const mongoose = require('mongoose')
const connection = require('../mongdb/db.js')

const answerSchema = new mongoose.Schema({
    user_name: String,
    avatar: String,
    title: String,
    content: String,
    star: String,
    comments: String,
    user_id: String,
    createTime: String,
    main_img: String,   
    lastModifyTime: String,
})

const answer = connection.model('answer',answerSchema)

module.exports = answer