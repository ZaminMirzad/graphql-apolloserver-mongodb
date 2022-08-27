const mongoose = require('mongoose');
const Double = require('@mongoosejs/double');

const { Schema } = mongoose;

const cartSchema = new Schema(
  {
    userId: String,
    cartTotalPrice: Double,
    cartTotalItems: Number,
    items: Array,
  },
  { timestamps: true }
);

const Cart = mongoose.model('Cart', cartSchema);
module.exports = { Cart };
