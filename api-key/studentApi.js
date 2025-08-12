const express = require("express");
const jwt = require('jsonwebtoken');
const model = require('../schema/schema');
const studentApi = express.Router();
const cors = require("cors");
const SECRET_KEY = "2022kkkuk349@/";

studentApi.get('/', async (req, res) => {
    try {
        const token = req.cookies?.stu;

        if (!token) {
            return res.status(401).send("Token missing, not logged in");
        }
        const decoded = jwt.verify(token, SECRET_KEY);
        const studentId = decoded._id;
        const student = await model.findById(studentId);
        if (!student) {
            return res.status(404).send("Student not found");
        }
        return res.json(student);
    } catch (error) {
        console.error("JWT verification or DB error:", error);
        return res.status(500).send("Server error or invalid token");
    }
});

module.exports = studentApi;
