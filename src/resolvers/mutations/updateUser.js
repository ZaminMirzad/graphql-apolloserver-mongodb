const { User } = require('../../models/User');

module.exports = async (_, { id, userData }, { models }) => {
  const updatedUser = await User.findByIdAndUpdate(
    { _id: id },
    { $set: userData },
    { new: true }
  );
  return updatedUser;
};
