const mongoose = require('mongoose')


const dateSheet = new mongoose.Schema({
    date: { type: Date },
    subject: { type: String },
    time: { type: String },
    class: { type: String },
    teacherName: {type:String},
    style: {
        type: String,
        enum: ['Objective', 'Subjective', 'Both'],
        required: true
    }
});


const exam = mongoose.model('dateSheet', dateSheet)

module.exports = exam