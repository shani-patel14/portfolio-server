const router = require('express').Router()
const Project = require('../models/Project')

// GET all projects
router.get('/', async (req, res) => {
  try {
    const projects = await Project.find()
    res.json(projects)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

// POST new project
router.post('/', async (req, res) => {
  try {
    const project = new Project(req.body)
    await project.save()
    res.json(project)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})

module.exports = router