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

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
};
