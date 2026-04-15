const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const rideRoutes = require('./routes/rideRoutes');
const cors = require('cors');
const { AddAPhoto } = require('@mui/icons-material');

const app = express();

// ✅ CORS first
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true,
}));

// Middleware
app.use(bodyParser.json());

// DB
mongoose.connect('mongodb://localhost:27017/KK')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.log(err));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/rides' ,rideRoutes);

// Server
const PORT = 5000; // ✅ FIXED
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
