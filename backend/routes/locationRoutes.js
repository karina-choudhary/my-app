const express = require('express');
const router = express.Router();
const locationController = require('../controllers/locationController');

// Route to get all locations
router.get('/locations', locationController.getLocations);

// Route to create a new location
router.post('/locations', locationController.createLocation);

module.exports = router;
