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
    default: true,
    required: true
  },
  // date: {
  //   type: Date,
  //   required: true
  // },
  // date_created: {
  //   type: Date,
  //   default: Date.now
  // },
  // booking_duration: {
  //   type: String,
  //   required: true
  // },
  // occasion: {
  //     type: String,
  //     required: true
  // },
  // number_of_guests: {
  //     type: Number,
  //     required: true
  // },
  // venue_city: {
  //     type: Location,
  //     required: true
  // },
  // packages: 
  //   [{type: String}],
  //   // required: true
});

module.exports = Booking = mongoose.model('booking', BookingSchema);
