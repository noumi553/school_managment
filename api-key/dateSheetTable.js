const express = require('express')
const exam = require('../schema/dateSheet')

const dateSheetTable = express.Router()

dateSheetTable.get('/',async(req,res)=>{
    try{
        const dateSheet = await exam.find()
    res.json(dateSheet)
    }catch(error){
        res.send('error',error)
    }
})

module.exports = dateSheetTable