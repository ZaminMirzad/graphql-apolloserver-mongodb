const { User } = require('../../models/User');
const { Product } = require('../../models/Product');
const { Cart } = require('../../models/Cart');

// ? Create new user
const createUser = async (_, { userData }, { models }) => {
  const newUser = new User(userData);
  const savedUser = await newUser.save();
  return savedUser;
};

// ? Update user
const updateUser = async (_, { id, userData }, { models }) => {
  const updatedUser = await User.findByIdAndUpdate(
    { _id: id },
    { $set: userData },
    { new: true }
  );
  return updatedUser;
};

// ! Delete user
const deleteUser = async (_, { id }, { models }) => {
  const deleteUser = await User.deleteOne({ _id: id });

  if (deleteUser.deletedCount) return { id: id };
};

// ? Create new Product
const addProduct = async (_, { productDetails }, {}) => {
  const newProd = new Product(productDetails);
  const savedProd = await newProd.save();
  return savedProd;
};
// ! Delete product
const deleteProduct = async (_, { id }, { models }) => {
  const deleteProd = await Product.deleteOne({ _id: id });

  if (deleteProd.deletedCount) return { id: id };
};

// ? Add to cart
const addToCart = (async = async (_, { item }, { models }) => {
  const newItem = new Cart(item);
  const savedItem = await newItem.save();
  return savedItem;
});

// ? Update cart
const updateCartItem = async (_, { id, updateInputs }, { models }) => {
  const updatedCartItem = await Cart.findByIdAndUpdate(
    { _id: id },
    { $set: updateInputs },
    { new: true }
  );
  return updatedCartItem;
};

// ! Delete from cart
const deleteFromCart = async (_, { id }, { models }) => {
  const deleteItem = await Cart.deleteOne({ _id: id });

  if (deleteItem.deletedCount) return { id: id };
};

// ? Add to favorites inside user
const updateUserFavorites = (async = async (_, { userId, productId }) => {
  const user = await User.findById(userId);
  if (user.favorites.includes(productId)) {
    const deleteFavorite = await User.findByIdAndUpdate(
      { _id: userId },
      { $pull: { favorites: productId } }
    );

    return deleteFavorite;
  } else {
    const updateFavor = await User.findByIdAndUpdate(
      { _id: userId },
      { $push: { favorites: productId } }
    );
    return updateFavor;
  }
});

module.exports = {
  createUser,
  updateUser,
  deleteUser,
  addProduct,
  deleteProduct,
  addToCart,
  updateCartItem,
  deleteFromCart,
  updateUserFavorites,
};
