const mongoose = require('mongoose')

const teacher = new mongoose.Schema({
    name:{
        type:String,
    },
    fatherName:{
        type:String
    },
    village:{
        type:String
    },
    subject:{
        type:String
    },
    id:{
        type:String
    },
    email:{
        type:String
    },
    phone:{
        type:String
    },
    auth:{
        email:{
            type:String,
            unique:true
        },
        password:{
            type:String,
        },
        image: {
            name: String,
            imagePath: String
        }
    }
})

const teacherModel = mongoose.model('teacher',teacher)

module.exports = teacherModel