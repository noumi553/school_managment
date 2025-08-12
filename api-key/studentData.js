const express = require('express')
const model = require('../schema/schema')
const path = require('path')

const studentData = express.Router()

studentData.post('/',async(req,res)=>{
    const body= req.body
    await model.create({
        name:body.name,
        fatherName:body.fatherName,
        village:body.village,
        class:body.class,
        rollNumber:body.rollNumber,
        email:body.email,
        phone:body.phone
    })
    return res.sendFile(path.resolve(__dirname,'../public','addStudent.html'))
})

module.exports = studentData