const express = require('express');
const jwt = require('jsonwebtoken');
const SECRET_KEY = "2022kkkuk349@/";
const teacherModel = require('../schema/teacherSchema');
const { findOne } = require('../schema/schema');

const teacherdataget = express.Router();

teacherdataget.get('/', async (req, res) => {
    try{
        const token = req.cookies?.tech
        if(!token){
            res.send("no such login teacher")
        }
        const decoded = jwt.verify(token,SECRET_KEY)
        const teacherId = decoded._id
        const teacher = await teacherModel.findById(teacherId)
        res.json(teacher)
    }catch(error){
        console.log(error)
        res.send('interval error')
    }
});

module.exports =  teacherdataget ;
