const express = require('express')
const teacherModel = require('../schema/teacherSchema')

const teacherUpdate = express.Router()

teacherUpdate.put('/:id', async (req, res) => {
    try {
        const updatedTeacher = await teacherModel.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        if (!updatedTeacher) return res.status(404).send('Not found');
        res.send(updatedTeacher);
    } catch (err) {
        res.status(500).send('Update error');
    }
});

module.exports=teacherUpdate