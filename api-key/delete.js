const express = require('express');
const model = require('../schema/schema');

const deletes = express.Router();

deletes.post('/:id', async (req, res) => {
    const id = req.params.id;
    console.log("Delete request for ID:", id);
    try {
        const user = await model.findByIdAndDelete(id);
        if (!user) return res.status(404).send("User not found");
        return res.status(200).send('Deleted');
    } catch (error) {
        console.error("Delete error:", error);
        res.status(500).send("Server error");
    }
});


module.exports = deletes;
