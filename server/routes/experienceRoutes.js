const express = require('express');
const Experience = require('../models/Experience');

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const items = await Experience.find().sort({ order: 1, createdAt: -1 });
    res.json(items);
  } catch (err) {
    next(err);
  }
});

module.exports = router;

