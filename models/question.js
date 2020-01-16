const mongoose = require('mongoose')
const connection = require('../mongdb/db.js')

const questionSchema = new mongoose.Schema({
    user_name: String,
    user_id: String,
    avatar: String,
    question: String,
    answer_count: String,
    answer: Array,
    star: String,
    createTime: String, 
    labels: [String],
    lastModifyTime: String,
})

const question = connection.model('question',questionSchema)

module.exports = question