const express = require('express');
const router = express.Router();
const User = require('../models/User');

// GET endpoint to fetch users
router.get('/', async (req, res) => {
    try {
        const users = await User.find({});
        console.log(users);
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// POST endpoint to post new users to the databse
router.post('/', async (req, res) => {
    const newUser = new User(req.body); // Replace YourModel with User or Product
    try {
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;