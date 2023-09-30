const mongoose = require("mongoose");

const bookSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  available: {
    type: Boolean,
    // required: true,
  },
});

module.exports = mongoose.model("Book", bookSchema);
