const mongoose = require('mongoose');

const enquirySchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  contactNo: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  },
  attachments: [{ type: String }] // Store the file paths here
});

const Enquiry = mongoose.model('Enquiry', enquirySchema);

module.exports = Enquiry;
