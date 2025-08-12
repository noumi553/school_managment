const express = require('express');
const teacherSignup = express.Router();
const path = require('path');
const teacherModel = require('../schema/teacherSchema');
const upload = require('../upload');

teacherSignup.post('/:id',  upload.single('image'),async (req, res) => {
    const { id, email, password } = req.body;
    try {
        const user = await teacherModel.findOne({ id: String(id).trim() });
        if (!user) {
            return res.status(404).send('No user found with this ID');
        }
        const imageName = req.file.filename;
        const imagePath = `/uploads/${imageName}`;
        user.auth = {
            email,
            password,
            image: {
                name: imageName,
                imagePath: imagePath
            }
        };

        await user.save();
        res.sendFile(path.resolve(__dirname, '../public', 'teacherAccount.html'));
    } catch (error) {
        console.error('Signup error:', error);
        res.status(500).send('Internal server error');
    }
});

module.exports = teacherSignup;
