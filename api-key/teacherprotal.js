const express = require('express');
const path = require('path');
const teacherModel = require('../schema/teacherSchema')
const {setTheUser}= require('../serves/servesthree')
const teacherPortalSigin = express.Router();

teacherPortalSigin.post('/', async (req, res) => {
        const { email, password } = req.body;
        if (!email || !password) {return res.status(400).send("Invalid email or password!");}
        const user = await teacherModel.findOne({ 'auth.email': email, 'auth.password': password });
        if (!user) {return res.status(401).send('No such user found');}
        const token = setTheUser(user)
        if (!token) return res.sendFile(path.resolve(__dirname, '../public', 'teacherPortal.html'));
        res.cookie('tech',token)
        return res.sendFile(path.resolve(__dirname, '../public', 'teacherdisplay.html'));
});

module.exports = teacherPortalSigin;
