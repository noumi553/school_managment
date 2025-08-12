const express = require('express');
const model = require('../schema/schema'); 

const updateStudent = express.Router();

updateStudent.patch('/:id', async (req, res) => {
    const studentId = req.params.id;
    const { name, rollNumber, mark } = req.body;

    try {
        const updatedStudent = await model.findByIdAndUpdate(
            studentId,
            { 
                ...(name && { name }), 
                ...(rollNumber && { rollNumber }), 
                ...(mark && { mark }) 
            },
            { new: true, runValidators: true }
        );

        if (!updatedStudent) {
            return res.status(404).json({ message: 'Student not found' });
        }

        res.status(200).json({
            message: 'Student updated successfully',
            data: updatedStudent
        });

    } catch (error) {
        res.status(500).json({ message: 'Error updating student', error: error.message });
    }
});

module.exports = updateStudent;