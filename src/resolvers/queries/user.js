const { User } = require('../../models/User');

module.exports = async (_, { id }, { models }) => {
  return await User.findOne({ _id: id });
};
