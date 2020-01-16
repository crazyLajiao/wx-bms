const express = require('express')
const router = express.Router()
const randomModel = require('../models/random')
const data = require('../data/random')
router.get('/',function(req,res,next){
    res.send('this is random')
})
router.get('/create',function(req,res,next){
    randomModel.insertMany(data,(err,docs)=>{
        if(err){
            console.log('插入数据错误')
        }else{
            console.log('插入数据成功',docs)
            
        }
    })
    // let demo = new randomModel({
    //     id: 1,
    //     imgUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1578916551874&di=b8f42e75d8ebc3174e765cbea4f025bc&imgtype=0&src=http%3A%2F%2Fwww.dbfan.com.cn%2Fattachs%2Fimage%2F1710%2F0600001320883.png',
    //     user_id: 1,
    //     user_avatar: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1819299281,561311662&fm=26&gp=0.jpg',
    //     user_name: 'Alita',
    //     star: 200,
    //     comments: 30
    // })
    // demo.save().then(()=>{
    //     res.send('创建成功')
    //     console.log('this is: ',demo)
    // },)
})
router.get('/find',function(req,res,next){
    let skip = req.query.skip || 0;
    let limit = req.query.limit || 10; 
    randomModel.find().skip(Number(skip)).limit(Number(limit)).then((doc)=>{
        if(doc.length){
            res.send({
                status: 1,
                data: doc
            })
        }else{
            res.send({
                status: 0,
                message: '查询失败'
            })
        }
    })
    // if(skip){
    //     if(limit){ 
    //         randomModel.find().skip(Number(skip)).limit(Number(limit)).then((doc)=>{
    //             if(doc.length){
    //                 res.send({
    //                     status: 1,
    //                     data: doc
    //                 })
    //             }else{
    //                 res.send({
    //                     status: 0,
    //                     message: '查询失败'
    //                 })
    //             }
    //         })
    //     }else{
    //         randomModel.find().skip(Number(skip)).then((doc)=>{
    //             if(doc.length){
    //                 res.send({
    //                     status: 1,
    //                     data: doc
    //                 })
    //             }else{
    //                 res.send({
    //                     status: 0,
    //                     message: '查询失败'
    //                 })
    //             }
    //         })
    //     }
    // }else{
    //     if(limit){ 
    //         randomModel.find().limit(Number(limit)).then((doc)=>{
    //             if(doc.length){
    //                 res.send({
    //                     status: 1,
    //                     data: doc
    //                 })
    //             }else{
    //                 res.send({
    //                     status: 0,
    //                     message: '查询失败'
    //                 })
    //             }
    //         })
    //     }else{
    //         randomModel.find().then((doc)=>{
    //             if(doc.length){
    //                 res.send({
    //                     status: 1,
    //                     data: doc
    //                 })
    //             }else{
    //                 res.send({
    //                     status: 0,
    //                     message: '查询失败'
    //                 })
    //             }
    //         })
    //     }
    // }
    
})

module.exports = router