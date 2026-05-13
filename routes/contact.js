const router = require('express').Router();
const nodemailer = require('nodemailer'); // npm install nodemailer

router.post('/', async (req, res) => {
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: { user: process.env.EMAIL, pass: process.env.EMAIL_PASS }
  });

  await transporter.sendMail({
    from: email,
    to: process.env.EMAIL,
    subject: `Portfolio message from ${name}`,
    text: message
  });

  res.json({ success: true });
});

module.exports = router;