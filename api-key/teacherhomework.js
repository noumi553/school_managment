const express = require('express')
const homeworkModel = require('../schema/homework')
const path = require('path')

const homeworks = express.Router()

homeworks.post('/', async (req, res) => {
    try {
        const { topic, teacherName,id, subjectName, className, comment } = req.body
        await homeworkModel.create({ topic, teacherName, id ,subjectName, className, comment })
        res.sendFile(path.resolve(__dirname,'../public','home.html'))
    } catch (error) {
        console.log(error)
        res.send("intervel server error")
    }
})

module.exports = homeworks