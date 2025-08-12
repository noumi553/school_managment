const express = require('express')
const path = require('path')
const authMidleware = require('../midlwire/session')

const home = express.Router()
home.use(express.static(path.join(__dirname, 'public'), {
    admin: false
}));

home.get("/",authMidleware,async(req,res)=>{
    try{
        return await res.sendFile(path.resolve(__dirname,'../public','admin.html'))
    }catch(error){
        res.send(error)
    }
})

function image(req,res){
    res.sendFile(path.resolve(__dirname,'../public','noumi.jpg'))
}

function studentSection(req,res){
    res.sendFile(path.resolve(__dirname,'../public','addStudent.html'))
}

function studentSignup(req,res){
    res.sendFile(path.resolve(__dirname,'../public','signup.html'))
}

function student(req,res){
    res.sendFile(path.resolve(__dirname,'../public','student.html'))
}

function examSection(req,res){
    res.sendFile(path.resolve(__dirname,'../public','examSection.html'))
}

function studentMarks(req,res){
    res.sendFile(path.resolve(__dirname,'../public','studentMark.html'))
}

function examDateSheet(req,res){
    res.sendFile(path.resolve(__dirname,'../public','examDateSheet.html'))
}

function feesSection(req,res){
    res.sendFile(path.resolve(__dirname,'../public','feesSection.html'))
}

function manageFees(req,res){
    res.sendFile(path.resolve(__dirname,'../public','manageFees.html'))
}

function teacherSection(req,res){
    res.sendFile(path.resolve(__dirname,'../public','teacherSection.html'))
}

function teacherAccount(req,res){
    res.sendFile(path.resolve(__dirname,'../public','teacherAccount.html'))
}

function teacherdata(req,res){
    res.sendFile(path.resolve(__dirname,'../public','teacher.html'))
}

function allhomework(req,res){
    res.sendFile(path.resolve(__dirname,'../public','displayallhomework.html'))
}

function studenthomework(req,res){
    res.sendFile(path.resolve(__dirname,'../public','studenthomework.html'))
}

module.exports={
    home,
    image,
    studentSection,
    studentSignup,
    student,
    examSection,
    studentMarks,
    examDateSheet,
    feesSection,
    manageFees,
    teacherSection,
    teacherAccount,
    teacherdata,
    allhomework,
    studenthomework
}