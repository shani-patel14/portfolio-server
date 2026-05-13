const router = require('express').Router();
const Project = require('../models/Project');

// GET all projects
router.get('/', async (req, res) => {
  try {
    const projects = await Project.find();
    res.status(200).json(projects);
  } catch (error) {
    // अगर कोई एरर आता है, तो 500 (Server Error) भेजें
    res.status(500).json({ message: "Error fetching projects", error: error.message });
  }
});

// POST a project
router.post('/', async (req, res) => {
  try {
    const project = new Project(req.body);
    console.log(project);
    await project.save();
    // 201 का मतलब है 'Created' (नया डेटा सफलतापूर्वक बन गया)
    res.status(201).json(project);
  } catch (error) {
    // 400 का मतलब है 'Bad Request' (यूज़र ने गलत डेटा भेजा है)
    res.status(400).json({ message: "Error saving project", error: error.message });
  }
});

module.exports = router;