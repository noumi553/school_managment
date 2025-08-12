const express = require('express');
const homeworkModel = require('../schema/homework');

const homeworkdelete = express.Router();

// Delete homework by ID
homeworkdelete.delete('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const deletedHomework = await homeworkModel.findByIdAndDelete(id);

        if (!deletedHomework) {
            return res.status(404).json({ message: "Homework not found" });
        }

        res.json({ message: "Homework deleted successfully" });
    } catch (error) {
        console.error("Delete error:", error);
        res.status(500).json({ message: "Server error" });
    }
});

module.exports = homeworkdelete;
