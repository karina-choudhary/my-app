const express = require('express');
const router = express.Router();

const { signup, login } = require('../controllers/authController');

// ✅ direct function pass karo
router.post('/signup', signup);
router.post('/login', login);

module.exports = router;