const express = require('express');
const Achievement = require('../models/Achievement');

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const items = await Achievement.find().sort({ order: 1, createdAt: -1 });
    res.json(items);
  } catch (err) {
    next(err);
  }
});

module.exports = router;

