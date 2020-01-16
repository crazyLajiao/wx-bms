const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const userModel = require('../models/user')
const data = require('../data/user')
router.get('/',function(req,res,next){
    res.send('this is user')
})
router.get('/create',function(req,res,next){
    userModel.insertMany(data,(err,docs)=>{
        if(err){
            console.log(err,'插入数据错误')
        }else{
            console.log('插入数据成功',docs)
            
        }
    })
})
router.get('/getUser',function(req,res,next){
  console.log(req.query.id)
  userModel.find({_id: mongoose.Types.ObjectId(req.query.id)}).then((doc)=>{
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
  }).catch((err)=>{
    console.log(err)
    res.send({
      status: 0,
      message: '查询失败'
  })
})
    
})

module.exports = router