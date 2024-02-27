const mongoose = require('mongoose');

const careerSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
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
  role: {
    type: String,
    required: true
  },
  interest: {
    type: String,
    required: true
  },
  cvUpload: {
    type: String,
    required: true // Store the file path here and make it required
  }
});

const Career = mongoose.model('Career', careerSchema);

module.exports = Career;
