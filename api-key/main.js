const express = require('express')
const path = require('path');

const main =express.Router()

main.use(express.static(path.join(__dirname, 'public'), {
    admin: false
}));

main.get('/',async(req,res)=>{
try{
    return res.sendFile(path.resolve(__dirname,'../public','index.html'))
}catch(error){
    res.send("no such file exist in current directry")
}
})

function room(req,res){
    res.sendFile(path.resolve(__dirname,'../public','room.jpg'))
}

function AcademicExcellence(req,res){
    res.sendFile(path.resolve(__dirname,'../public','AcademicExcellence.jpg'))
}

function BMCSS1(req,res){
    res.sendFile(path.resolve(__dirname,'../public','BMCSS1.png'))
}

function library(req,res){
    res.sendFile(path.resolve(__dirname,'../public','library.jpg'))
}

function portal(req,res){
    res.sendFile(path.resolve(__dirname,'../public','portal.html'))
}

function teacherimage(req,res){
    res.sendFile(path.resolve(__dirname,'../public','teacher.jpg'))
}

function studentimage(req,res){
    res.sendFile(path.resolve(__dirname,'../public','students.png'))
}

function teacherPortal(req,res){
    res.sendFile(path.resolve(__dirname,'../public','teacherPortal.html'))
}

function studentPortal(req,res){
    res.sendFile(path.resolve(__dirname,'../public','studentPortal.html'))
}

function studentdisplay(req,res){
    res.sendFile(path.resolve(__dirname,'../public','studentdisplay.html'))
}

function transcript(req,res){
    res.sendFile(path.resolve(__dirname,'../public','transcript.html'))
}

function feesportal(req,res){
    res.sendFile(path.resolve(__dirname,'../public','feesportal.html'))
}

function feesStructure(req,res){
    res.sendFile(path.resolve(__dirname,'../public','feesStructure.html'))
}


function examportal(req,res){
    res.sendFile(path.resolve(__dirname,'../public','examportal.html'))
}

function teacherportals(req,res){
    res.sendFile(path.resolve(__dirname,'../public','teacherdisplay.html'))
}

function homework(req,res){
    res.sendFile(path.resolve(__dirname,'../public','home.html'))
}


module.exports={
    main,
    room,
    AcademicExcellence,
    BMCSS1,
    library,
    portal,
    teacherimage,
    studentimage,
    teacherPortal,
    studentPortal,
    studentdisplay,
    transcript,
    feesportal,
    feesStructure,
    examportal,
    teacherportals,
    homework
}