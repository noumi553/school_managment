const express = require('express');
const exam = require('../schema/dateSheet');

const updateDateSheet = express.Router();

updateDateSheet.post('/:id', async (req, res) => {
    try {
        const _id = req.params.id;
        const { date, subject, time, class: classValue, style } = req.body;
        if (!date || !subject || !time || !classValue || !style) {
            return res.status(400).send('All fields are required.');
        }
        const parsedDate = new Date(date);
        if (isNaN(parsedDate)) {
            return res.status(400).send('Invalid date format.');
        }
        const updated = await exam.findByIdAndUpdate(
            _id,
            {
                date: parsedDate,
                subject,
                time,
                class: classValue,
                style
            },
            { new: true }
        );
        if (!updated) {
            console.log('No document found with ID:', _id);
            return res.status(404).send('Date sheet entry not found');
        }
        console.log('Updated Document:', updated);
        res.send('Date sheet updated successfully');
    } catch (err) {
        console.error('Update error:', err);
        res.status(500).send('Internal server error');
    }
});

module.exports = updateDateSheet;
