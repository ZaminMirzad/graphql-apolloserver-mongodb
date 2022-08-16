const { User } = require('../../models/User');

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

module.exports = { createUser, updateUser, deleteUser };
