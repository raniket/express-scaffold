const mongoose = require('mongoose');

const threadSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  // userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  title: { type: String, require: true},
  description: { type: String, require: true},
  tags: { type: Array, require: true },
  userName: { type: String, require: true },
  date: { type: Date, rquired: false, default: Date.now }
});

module.exports = mongoose.model('Thread', threadSchema);
