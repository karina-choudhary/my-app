const Ride = require('../models/Ride');

// ✅ CREATE RIDE (booking)
const createRide = async (req, res) => {
  try {
    const { pickup, drop, distance, fare, cabType } = req.body;

    const newRide = new Ride({
     // userId: 'tempUser', // JWT se aayega (important)
      pickup,
      drop,
      distance,
      fare,
      cabType
    });

    await newRide.save();

    res.status(201).json({
      message: "Ride booked successfully 🚗",
      ride: newRide
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✅ GET ALL RIDES (history)
const getRides = async (req, res) => {
  try {
    const rides = await Ride.find({ userId: req.userId }).sort({ date: -1 });

    res.json(rides);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { createRide, getRides };