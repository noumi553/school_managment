const {getTheUser} = require('../serves/servestwo')
const path = require('path')

function authMidlewaretwo(req,res,next){
    const userUid = req.cookies?.stu;
    if(!userUid) return res.sendFile(path.resolve(__dirname,'../public','studentPortal.html'));
    const user = getTheUser(userUid);
    if(!user) return res.sendFile(path.resolve(__dirname,'../public','studentPortal.html'));
    if (!req.cookies?.stu) {
        return res.sendFile(path.resolve(__dirname,'../public','studentPortal.html'));
    }
    req.user = user;
    next()
}

module.exports = authMidlewaretwo;