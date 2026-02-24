const express = require('express');
const { sendContactEmail } = require('../services/emailService');

const router = express.Router();

// POST /api/contact
router.post('/', async (req, res, next) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ message: 'Name, email, and message are required.' });
    }

    // Send email notification (works without database)
    await sendContactEmail({ name, email, message });

    res.status(201).json({ message: 'Message received. Thank you for reaching out!' });
  } catch (err) {
    console.error('Contact form error:', err);
    next(err);
  }
});

module.exports = router;

