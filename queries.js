const { models } = require('mongoose');

const getUsers = async (_, {}, { models }) => {
  return await models.User.find();
};

const getUserById = async (_, { id }, { models }) => {
  return await models.User.findOneById(id);
};

const createUser = async (_, { userData }, { models }) => {
  newUser = await models.User.create(userData);
  return newUser;
};

const updateUser = async (_, { id, userData }, { models }) => {
  const userToUpdate = await models.User.findOne({ _id: id });

  Object.keys(userData).forEach((value) => {
    userToUpdate[value] = userData[value];
  });

  const updatedUser = await userToUpdate.save();
  return updatedUser;
};

const deleteUser = async (_, { id }, { models }) => {
  const deleteUser = await models.User.deleteOne({ _id: id });

  if (deleteUser.deletedCount) return { id: id };
};

module.exports = { getUsers, createUser, getUserById, updateUser, deleteUser };
