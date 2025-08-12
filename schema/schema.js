const moongose = require('mongoose')

const schema = new moongose.Schema({
    name: {
        type: String,
        require: true
    },
    fatherName: {
        type: String,
        require: true
    },
    village: {
        type: String,
        require: true,
    },
    class: {
        type: String,
        require: true
    },
    rollNumber: {
        type: String,
        require: true,
        unique: true
    },
    email: {
        type: String
    },
    phone: {
        type: String
    },
    mark: [{
        title:{
            type:String
        },
        english: {
            type: String,
        },
        urdu: {
            type: String,
        },
        pakStudy: {
            type: String,
        },
        islamyat: {
            type: String,
        },
        maths: {
            type: String,
        },
        science:{
            type: String,
        },
        biology: {
            type: String,
        },
        physics: {
            type: String,
        },
        chemistry: {
            type: String,
        },
    }],
    signup: {
        email: {
            type: String,
            unique: true,
        },
        password: {
            type: String,
        },
        image: {
            name: String,
            imagePath: String
        }
    },
    fees: [{
        month: {
            type: String,
        },
        feesStatus: {
            type: String,
            default: "Unpaid"
        }
    }]
})

const model = moongose.model('student_data', schema)

module.exports = model