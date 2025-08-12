const express = require('express')
const path = require('path')

const authpage = express.Router()

authpage.get('/',async(req,res)=>{
    try{
        return await res.sendFile(path.resolve(__dirname,'../public','adminSignin.html'))
    }catch(error){
        res.send(error)
    }
})

module.exports = authpage