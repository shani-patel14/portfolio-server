const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/projects', require('./routes/Projects'));
app.use('/api/contact', require('./routes/contact'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running successfully on port ${PORT}`);
});

mongoose.connect(process.env.MONGO_URI)
  .then(() => app.listen(8000, () => console.log('Server running on port 8000')))
  .catch(err => console.log(err));