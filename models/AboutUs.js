const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AboutUsSchema = new Schema({
  text: {
    type: String,
    required: true
  }
});

module.exports = AboutUs = mongoose.model('aboutus', AboutUsSchema);

