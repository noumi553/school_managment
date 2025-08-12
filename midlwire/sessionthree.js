const {getTheUser} = require('../serves/servesthree')
const path = require('path')

function authMidlewarethree(req,res,next){
    const userUid = req.cookies?.tech;
    if(!userUid) return res.sendFile(path.resolve(__dirname,'../public','teacherportal.html'));
    const user = getTheUser(userUid);
    if(!user) return res.sendFile(path.resolve(__dirname,'../public','teacherportal.html'));
    if (!req.cookies?.tech) {
        return res.sendFile(path.resolve(__dirname,'../public','teacherportal.html'));
    }
    req.user = user;
    next()
}

module.exports = authMidlewarethree;