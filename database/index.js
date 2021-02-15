const mongoose = require('mongoose');

const mongoUri = 'mongodb://localhost/todomagoochi';

const db = mongoose.connect(mongoUri, {
  useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true,
});

module.exports = db;