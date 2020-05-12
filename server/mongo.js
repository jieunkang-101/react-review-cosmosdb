const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const env = {
  dbName: '',
  key: '',
  port: 0
}