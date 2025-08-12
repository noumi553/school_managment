const express = require('express')
const model = require('../schema/schema')
const studentProfile = express.Router()


studentProfile.get('/',async(req,res)=>{
            try{
                const student = await model.find()
                res.json(student)
            }catch(error){
                console.log('error:message',error)
            }
})

module.exports = studentProfile