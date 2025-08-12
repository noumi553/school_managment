const express = require('express');
const model = require('../schema/schema');
const updatedata = express.Router();

updatedata.post('/:id', async (req, res) => {
    const id = req.params.id;
    const {
        name,
        fatherName,
        village,
        class: studentClass,
        rollNumber,
        email,
        phone
    } = req.body;

    try {
        const updatedUser = await model.findByIdAndUpdate(
            id,
            {
                ...(name && { name }),
                ...(fatherName && { fatherName }),
                ...(village && { village }),
                ...(studentClass && { class: studentClass }),
                ...(rollNumber && { rollNumber }),
                ...(email && { email }),
                ...(phone && { phone })
            },
            { new: true }
        );

        if (!updatedUser) {
            return res.status(404).send('Student not found');
        }

        res.status(200).json(updatedUser);
    } catch (error) {
        console.error('Update error:', error);
        res.status(500).send('Server error during update');
    }
});

module.exports = updatedata;
