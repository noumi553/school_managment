const express = require('express');
const mark = express.Router();
const path = require('path')
const model = require('../schema/schema');

mark.post('/', async (req, res) => {
    const {
        rollNumber, title, english, urdu, pakStudy,
        islamyat, maths, science, biology, physics, chemistry
    } = req.body;
    try {
        const student = await model.findOne({ rollNumber: String(rollNumber).trim() });
        if (!student) {
            console.log("Student NOT FOUND with rollNumber:", rollNumber);
            return res.status(404).send('Student not found');
        }
        const newMark = {
            title,
            english,
            urdu,
            pakStudy,
            islamyat,
            maths,
            science,
            biology,
            physics,
            chemistry
        };

        // Push new exam mark into array
        student.mark.push(newMark);

        await student.save();
        res.sendFile(path.resolve(__dirname,'../public','examSection.html'));
    } catch (error) {
        console.error('Error updating marks:', error);
        res.status(500).send('Error updating marks');
    }
});

module.exports = mark;
