const express = require('express');
const homeworkModel = require('../schema/homework');

const homeworkupdate = express.Router();

// Update homework by ID
homeworkupdate.put('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const { topic, teacherName, className, subjectName, comment } = req.body;

        const updatedHomework = await homeworkModel.findByIdAndUpdate(
            id,
            { topic, teacherName, className, subjectName, comment },
            { new: true }
        );

        if (!updatedHomework) {
            return res.status(404).json({ message: "Homework not found" });
        }

        res.json({ message: "Homework updated successfully", data: updatedHomework });
    } catch (error) {
        console.error("Update error:", error);
        res.status(500).json({ message: "Server error" });
    }
});

module.exports = homeworkupdate;
