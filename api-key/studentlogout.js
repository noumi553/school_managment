const express = require('express');
const path = require('path')
const studentlogout = express.Router();

studentlogout.post('/', (req, res) => {
    res.clearCookie('stu'); // 'uid' is the cookie name you set during login
    res.sendFile(path.resolve(__dirname,'../public','index.html')); // or send a file, like res.sendFile(...)
});

module.exports = studentlogout;
