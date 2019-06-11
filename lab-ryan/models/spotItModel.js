const mongoose = require('mongoose');

const CardSchema = new mongoose.Schema({
  cards: []
});

// module.exports = mongoose.model('SpotIt', CardSchema);