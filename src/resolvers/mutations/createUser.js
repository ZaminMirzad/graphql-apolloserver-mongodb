const { User } = require('../../models/User');

module.exports = async (_, { userData }, { models }) => {
  const newUser = new User(userData);
  const savedUser = await newUser.save();
  return savedUser;
};
