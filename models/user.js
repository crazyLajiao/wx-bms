const mongoose = require('mongoose')
const connection = require('../mongdb/db.js')
const petSchema = new mongoose.Schema({
    name:String,
    kind:String,
    age:Number
})
const userSchema = new mongoose.Schema({
    user_name: String,
    user_age: Number,
    user_sex: String,
    country: String,
    city: String,
    pet_count: Number,
    pets: [petSchema],
    default_avatar: String,
    avatar: String,
    articles: String,
    follower: String,
    read_history_count: String,
    read_history: [],
    star_content: Array,
    professional: String,
    self_introduce: String,
    createTime: String,
    lastModifyTime: String,
})

const user = connection.model('user',userSchema)

module.exports = user