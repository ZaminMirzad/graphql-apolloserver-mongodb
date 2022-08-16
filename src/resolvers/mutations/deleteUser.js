const { User } = require('../../models/User');

module.exports = async (_, { id }, { models }) => {
  const deleteUser = await User.deleteOne({ _id: id });

  if (deleteUser.deletedCount) return { id: id };
};
