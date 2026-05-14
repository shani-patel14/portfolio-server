const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors({
  origin: [
    'http://localhost:3000',
    'https://portfolio-client-one-zeta.vercel.app'  // Vercel URL 
  ]
}))
app.use(express.json());

app.use('/api/Projects', require('./routes/Projects'));
app.use('/api/contact', require('./routes/contact'));

const PORT = process.env.PORT || 8000;

console.log(process.env.MONGO_URI);

mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log("MongoDB Connected");

    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
})
.catch(err => console.log(err));