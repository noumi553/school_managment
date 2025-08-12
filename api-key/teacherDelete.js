const express = require('express')
const teacherModel = require('../schema/teacherSchema')

const teacherDelete = express.Router()

teacherDelete.delete('/:id',async(req,res)=>{
    try {
        const result = await teacherModel.findByIdAndDelete(req.params.id);
        if (!result) return res.status(404).send('Not found');
        res.send('Deleted');
    } catch (err) {
        res.status(500).send('Error');
    }
})

module.exports = teacherDelete