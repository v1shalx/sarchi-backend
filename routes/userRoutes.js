// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const User = require('../models/user');

// POST route to submit user form
router.post('/submit-user-form', async (req, res) => {
    try {
        const { firstName, email, contactNo, interest } = req.body;

        // Check if all required fields are present
        if (!firstName || !email || !contactNo || !interest) {
            return res.status(400).json({ error: 'All fields are required' });
        }

        // Create a new user instance
        const user = new User({ firstName, email, contactNo, interest });
        
        // Save the user to the database
        await user.save();
        
        res.status(201).json({ message: 'User form submitted successfully' });
    } catch (error) {
        console.error('Error submitting user form:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;
