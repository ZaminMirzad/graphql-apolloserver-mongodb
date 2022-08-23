const mongoose = require('mongoose');
const Double = require('@mongoosejs/double');

const { Schema } = mongoose;

const productSchema = new Schema({
  id: String,
  title: String,
  description: String,
  category: String,
  image: String,
  price: Double,
  rating: {
    rate: Double,
    count: Number,
  },
});

const Product = mongoose.model('Product', productSchema);
module.exports = { Product };
