const express = require('express')
const exam = require('../schema/dateSheet')
const path = require('path')

const dateSheet = express.Router()

dateSheet.post('/',async(req,res)=>{
    const body = req.body
    if(!body.date || !body.subject || !body.time || !body.class || !body.teacherName || !body.style) return res.send("Please the input")
    await exam.create({
        date:body.date,
        subject:body.subject,
        time:body.time,
        class:body.class,
        teacherName:body.teacherName,
        style:body.style,
    })
    res.sendFile(path.resolve(__dirname,'../public','examDateSheet.html'));
})

module.exports = dateSheet