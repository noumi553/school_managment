const mongoose = require('mongoose')

const login= new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String
    }
})

const adminModel = mongoose.model('admin',login) 

module.exports = adminModel