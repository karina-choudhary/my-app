const express = require('express');
const router = express.Router();
const { createRide, getRides } = require('../controllers/rideController');

// 🔐 optional auth middleware (baad me add karenge)
router.post('/book', createRide);
router.get('/', getRides);

module.exports = router;