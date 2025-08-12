const express = require('express')
const path = require('path')
const adminModel = require('../schema/login')
const { setTheUser } = require('../serves/serves')

const auth = express.Router()

auth.post('/', async (req, res) => {
    const { email, password } = req.body
    if (!email || !password) return res.send("invilad email and password!")
    const user = await adminModel.findOne({ email, password })
    if (!user) return res.sendFile(path.resolve(__dirname, '../public', 'adminSignin.html'))
    const token = setTheUser(user);
    if (!token) return res.sendFile(path.resolve(__dirname, '../public', 'adminSignin.html'))
    res.cookie("uid", token);
    return res.sendFile(path.resolve(__dirname, '../public', 'admin.html'))
})

module.exports = auth