const { User } = require('../../models/User');
const { Product } = require('../../models/Product.js');
const { Cart } = require('../../models/Cart.js');

const user = async (_, { id }, { models }) => {
  return await User.findOne({ _id: id });
};

const users = async (_, {}, { models }) => {
  return await User.find();
};
//? product
const products = async (_, {}, { models }) => {
  return await Product.find();
};

const product = async (_, { id }, { models }) => {
  return await Product.findById(id);
};

//? cart
const cartItems = async (_, {}, { models }) => {
  return await Cart.find();
};
const cartItem = async (_, { id }, { models }) => {
  return await Cart.findOne({ _id: id });
};
const userOrders = async (_, { userId }, { models }) => {
  return await Cart.find({ userId: userId });
};
const order = async (_, { id }, { models }) => {
  return await Cart.findOne({ _id: id });
};

module.exports = {
  users,
  user,
  products,
  product,
  cartItems,
  cartItem,
  userOrders,
  order,
};
