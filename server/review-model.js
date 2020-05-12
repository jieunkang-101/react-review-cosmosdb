const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const reviewSchema = new Schema(
  {
    id: { type: Number, required: true, unique: true },
    name: String,
    content: String
  },
  { autoIndex: false }
);

const Review = mongoose.model('Review', reviewSchema);
module.exports = Review;