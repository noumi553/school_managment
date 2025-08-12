const mongoose = require('mongoose')

const homework = new mongoose.Schema({
        topic:{type:String},
    teacherName:{type:String},
    id:{type:String},
    subjectName:{type:String},
    className:{type:String},
    comment:{type:String}
})

const homeworkModel = mongoose.model('homework',homework)

module.exports = homeworkModel