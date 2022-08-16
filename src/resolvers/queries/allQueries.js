const { User } = require('../../models/User');

const user = async (_, { id }, { models }) => {
  return await User.findOne({ _id: id });
};

const users = async (_, {}, { models }) => {
  return await User.find();
};

module.exports = { users, user };
