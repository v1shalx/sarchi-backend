require('dotenv').config(); // Import dotenv to read .env file

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const careerRoutes = require('./routes/careerRoutes');
const enquiryRoutes = require('./routes/enquiryRoutes');

const app = express();

app.use(express.json());
app.use(cors({ origin: process.env.FRONTEND_URL })); // Use frontend URL from .env for CORS

require('./db');

app.use('/api', userRoutes);
app.use('/api', careerRoutes);
app.use('/api', enquiryRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
