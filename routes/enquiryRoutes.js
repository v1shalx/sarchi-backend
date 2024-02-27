const express = require('express');
const router = express.Router();
const Enquiry = require('../models/enquiry');

router.post('/submit-enquiry-form', async (req, res) => {
  try {
    const formData = req.body;
    const enquiry = new Enquiry(formData);
    await enquiry.save();
    res.status(201).json({ message: 'Form submitted successfully' });
  } catch (error) {
    console.error('Error submitting form:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
