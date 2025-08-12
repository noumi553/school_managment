const {getTheUser} = require('../serves/serves')
const path = require('path')

function authMidleware(req,res,next){
    const userUid = req.cookies?.uid;
    if(!userUid) return res.sendFile(path.resolve(__dirname,'../public','adminSignin.html'));
    const user = getTheUser(userUid);
    if(!user) return res.sendFile(path.resolve(__dirname,'../public','adminSignin.html'));
    if (!req.cookies?.uid) {
        return res.sendFile(path.resolve(__dirname,'../public','adminSignin.html'));
    }
    req.user = user;
    next()
}

module.exports = authMidleware;