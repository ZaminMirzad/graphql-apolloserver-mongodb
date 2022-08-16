require('dotenv').config();

const mongoose = require('mongoose');
const DATABASE_URL = process.env.MONGODB_URL;

const connectDB = () => {
  return mongoose.connect(DATABASE_URL, (err) => {
    if (err) {
      console.log('connection to database failed');
    } else {
      console.log('connection to database was successful');
    }
  });
};

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Mongodb connection failed'));

module.exports = connectDB;
