const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateBookingInput(data) {
  let errors = {};

  data.client_name = validText(data.client_name) ? data.client_name : '';
  
  if (Validator.isEmpty(data.client_name)) {
    errors.text = 'Client name is required';
  }

  if (Validator.isEmpty(data.client_email)) {
    errors.text = 'Email field is required';
  }

  if (Validator.isEmpty(data.date)) {
    errors.text = 'Date is required';
  }

  if (Validator.isEmpty(data.booking_duration)) {
    errors.text = 'Booking duration is required';
  }

  if (Validator.isEmpty(data.occasion)) {
    errors.text = 'Occasion is required';
  }

  if (Validator.isEmpty(data.number_of_guests)) {
    errors.text = 'Number of guests is required';
  }

  if (Validator.isEmpty(data.venue_city)) {
    errors.text = 'Venue city is required';
  }

  if (Validator.isEmpty(data.venue_name)) {
    errors.text = 'Venue name is required';
  }

  if (Validator.isEmpty(data.package)) {
    errors.text = 'Package field is required';
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
};
