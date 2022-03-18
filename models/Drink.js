const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DrinkSchema = new Schema({
  drink_name: {
    type: String,
    required: true
  },
  ingredients: {
    type: String,
    required: true
  },
  beverage_type: {
    type: String,
    required: true,
  },
  favorite: {
    type: Boolean,
    default: false,
  },
  imageUrl: {
    type: String,
    require: false,
    default: ''
  },
  description: {
    type: String,
    require: false,
    default: '',
  }
});

module.exports = Drink = mongoose.model('drink', DrinkSchema);

