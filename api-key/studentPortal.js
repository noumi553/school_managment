const express = require('express');
const path = require('path');
const model = require('../schema/schema');
const {setTheUser}= require('../serves/servestwo')
const studentPortalSigin = express.Router();

studentPortalSigin.post('/', async (req, res) => {
        const { email, password } = req.body;
        if (!email || !password) {return res.status(400).send("Invalid email or password!");}
        const user = await model.findOne({ 'signup.email': email, 'signup.password': password });
        if (!user) {return res.status(401).send('No such user found');}
        const token = setTheUser(user)
        if (!token) return res.sendFile(path.resolve(__dirname, '../public', 'studentPortal.html'));
        res.cookie('stu',token)
        return res.sendFile(path.resolve(__dirname, '../public', 'studentdisplay.html'));
});

module.exports = studentPortalSigin;
