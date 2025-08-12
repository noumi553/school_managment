const express = require('express')
const path = require('path')
const teacherModel = require('../schema/teacherSchema')

const teacher = express.Router()

teacher.post('/',async(req,res)=>{
        const body= req.body
        if(!body.name || !body.fatherName || !body.village || !body.subject || !body.id || !body.email || !body.phone){
            return res.send("please fill input field")
        }
        await teacherModel.create({
            name:body.name,
            fatherName:body.fatherName,
            village:body.village,
            subject:body.subject,
            id:body.id,
            email:body.email,
            phone:body.phone
        })
        return res.sendFile(path.resolve(__dirname,'../public','teacherSection.html'))
})

module.exports = teacher