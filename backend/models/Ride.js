const mongoose = require('mongoose');

const rideSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: false
  },
  pickup: {
    type: String,
    required: true
  },
  drop: {
    type: String,
    required: true
  },
  distance: {
    type: Number
  },
  fare: {
    type: Number
  },
  cabType: {
    type: String,
    enum: ['mini', 'sedan', 'suv'],
    default: 'mini'
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Ride', rideSchema);