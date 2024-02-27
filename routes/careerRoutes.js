const express = require('express');
const router = express.Router();
const upload = require('../multerConfig'); // Import multer configuration
const Career = require('../models/Career');

router.post('/submit-career-form', upload.single('cvUpload'), async (req, res) => {
  try {
    const { firstName, lastName, email, contactNo, role, interest } = req.body;
    const cvUpload = req.file ? req.file.path : ''; // Check if file is uploaded and get its path
    const career = new Career({ firstName, lastName, email, contactNo, role, interest, cvUpload });
    await career.save();
    res.status(201).json({ message: 'Career form submitted successfully' });
  } catch (error) {
    console.error('Error submitting career form:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
