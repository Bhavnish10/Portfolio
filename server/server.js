const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');
require('dotenv').config();

const educationRoutes = require('./routes/educationRoutes');
const experienceRoutes = require('./routes/experienceRoutes');
const projectRoutes = require('./routes/projectRoutes');
const skillRoutes = require('./routes/skillRoutes');
const achievementRoutes = require('./routes/achievementRoutes');
const contactRoutes = require('./routes/contactRoutes');

const app = express();

// Basic security & parsing middleware
app.use(cors({ origin: process.env.CLIENT_URL || '*', methods: ['GET', 'POST'], credentials: true }));
app.use(express.json());
app.use(morgan('dev'));

// API routes
app.use('/api/education', educationRoutes);
app.use('/api/experience', experienceRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/skills', skillRoutes);
app.use('/api/achievements', achievementRoutes);
app.use('/api/contact', contactRoutes);

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Portfolio API running' });
});

// Global error handler
// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err);
  res.status(err.status || 500).json({
    message: err.message || 'Internal Server Error'
  });
});

const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI;

// Start server without MongoDB for now
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
  console.log('MongoDB connection skipped - running in email-only mode');
});

// Optional: Connect to MongoDB if available
if (MONGODB_URI && MONGODB_URI !== 'mongodb://localhost:27017/bhavnish-portfolio') {
  mongoose
    .connect(MONGODB_URI, {
      autoIndex: true
    })
    .then(() => {
      console.log('Connected to MongoDB');
    })
    .catch((err) => {
      console.log('MongoDB not available, continuing without database');
    });
}

