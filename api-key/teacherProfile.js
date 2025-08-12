const express = require('express')
const teacherModel = require('../schema/teacherSchema')


const teacherProfile = express.Router()

teacherProfile.get('/',async(req,res)=>{
        try{
            const  user = await teacherModel.find()
            res.send(user)
        }catch(error){
            res.json({message:"There are some issue in server"})
        }
})

module.exports = teacherProfile