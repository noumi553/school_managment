const moongose = require('mongoose')

const connect =async(url)=>{
try{
await moongose.connect(url)
}
catch (error){
    console.log('error message',error)
}
}

module.exports = connect