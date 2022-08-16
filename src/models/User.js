const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
  id: {
    type: String,
  },
  firstName: {
    type: String,
    trim: true,
  },
  lastName: {
    type: String,
    trim: true,
  },
  email: {
    type: String,
  },
  phone: {
    type: String,
  },
});
const User = mongoose.model('User', UserSchema);
module.exports = { User };
