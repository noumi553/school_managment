const express = require('express');
const signup = express.Router();
const model = require('../schema/schema');
const path = require('path');
const upload = require('../upload');

signup.post('/', upload.single('image'), async (req, res) => {
    const { rollNumber, email, password } = req.body;
    try {
        const user = await model.findOne({ rollNumber: String(rollNumber).trim() });
        if (!user) {
            return res.status(404).send('No user found with this roll number');
        }
        if (!req.file) {
            return res.status(400).send('Image file is required');
        }
        const imageName = req.file.filename;
        const imagePath = `/uploads/${imageName}`;
        user.signup = {
            email,
            password,
            image: {
                name: imageName,
                imagePath: imagePath
            }
        };

        await user.save();
        res.sendFile(path.resolve(__dirname, '../public', 'signup.html'))
    } catch (error) {
        console.error('Signup error:', error);
        res.status(500).send('Internal server error');
    }
});

module.exports = signup;
