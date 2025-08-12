const express = require('express')
const homeworkModel = require('../schema/homework')

const homeworkget = express.Router()

homeworkget.get('/',async(req,res)=>{
try{
    const studenthomework = await homeworkModel.find()
    res.json(studenthomework)
}catch(error){
    console.log(error)
    res.send("intervel server error")
}
})

module.exports = homeworkget