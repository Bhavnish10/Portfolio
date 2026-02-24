const express = require('express');
const Skill = require('../models/Skill');

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const items = await Skill.find().sort({ category: 1, order: 1 });
    res.json(items);
  } catch (err) {
    next(err);
  }
});

module.exports = router;

