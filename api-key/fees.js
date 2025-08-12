const express = require('express');
const model = require('../schema/schema');

const fees = express.Router();

fees.post('/', async (req, res) => {
    try {
        const { rollNumber, month, feesStatus } = req.body;
        const user = await model.findOne({ rollNumber: String(rollNumber).trim() });
        if (!user) {
            return res.status(404).send('No student found with this Roll Number');
        }
        const cleanedMonth = String(month).trim();
        const existingMonth = user.fees.find(fee => fee.month.toLowerCase() === cleanedMonth.toLowerCase());
        if (existingMonth) {
            return res.status(400).send('Fees for this month already exist');
        }
        user.fees.push({
            month: cleanedMonth,
            feesStatus: feesStatus || "Unpaid"
        });
        await user.save();
        res.send('Fees for the month added successfully');
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
});



module.exports = fees;
