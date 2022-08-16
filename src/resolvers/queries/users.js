const { User } = require('../../models/User');

module.exports = async (_, {}, { models }) => {
  return await User.find();
};
