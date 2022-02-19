const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookingSchema = new Schema({
  client_name: {
    type: String,
    required: true
  },
  client_email: {
    type: String,
    required: true
  },
  opened: {
    type: Boolean,
    default: false,
  },
  date: {
    type: Date,
    required: true
  },
  date_created: {
    type: Date,
    default: Date.now
  },
  booking_duration: {
    type: String,
    required: true
  },
  occasion: {
    type: String,
    required: true
  },
  num_of_guests: {
    type: Number,
    required: true
  },
  venue_city: {
    type: String,
    required: true
  },
  venue_name: {
    type: String,
    required: true
  },
  package: {
    type: String,
    required: true
  },
  referral_source: {
    type: String,
  },
  bar_budget: {
    type: String,
    required: true
  },
  comments: {
    type: String,
  },
  booked: {
    type: Boolean,
    default: false,
  }
});

module.exports = Booking = mongoose.model('booking', BookingSchema);

