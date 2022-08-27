const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema(
  {
    id: String,
    firstName: {
      type: String,
      trim: true,
    },
    lastName: {
      type: String,
      trim: true,
    },
    email: String,
    phone: String,
    favorites: Array,
  },
  { timestamps: true }
);
const User = mongoose.model('User', UserSchema);
module.exports = { User };
