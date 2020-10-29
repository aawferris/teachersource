const mongoose = require('mongoose');

let MONGODB_URI = process.env.PROD_MONGODB || 'mongodb://127.0.0.1:27017/lessonsAppDatabase';

mongoose
  .connect(MONGODB_URI, { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false });
  .then(() => console.log('Successfully connected to MongoDB.'));
  .catch (event => console.error('Connection error', event.message));

module.exports = mongoose.connection;