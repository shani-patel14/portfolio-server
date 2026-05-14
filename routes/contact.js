const router = require('express').Router()

router.post('/', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body
    console.log('Message received:', { name, email, subject, message })
    res.json({ success: true, message: 'Message received!' })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

module.exports = router