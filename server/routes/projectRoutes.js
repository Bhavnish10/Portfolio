const express = require('express');
const Project = require('../models/Project');

const router = express.Router();

// GET /api/projects
router.get('/', async (req, res, next) => {
  try {
    const items = await Project.find().sort({ order: 1, createdAt: -1 });
    res.json(items);
  } catch (err) {
    next(err);
  }
});

// POST /api/projects
router.post('/', async (req, res, next) => {
  try {
    const project = new Project(req.body);
    await project.save();
    res.status(201).json(project);
  } catch (err) {
    next(err);
  }
});

module.exports = router;

