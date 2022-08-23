const mongoose = require('mongoose');
const Double = require('@mongoosejs/double');

const { Schema } = mongoose;

const cartSchema = new Schema({
  id: String,
  userId: String,
  totalPrice: Double,
  totalItems: Number,
  items: Array,
});

const Cart = mongoose.model('Cart', cartSchema);
module.exports = { Cart };
