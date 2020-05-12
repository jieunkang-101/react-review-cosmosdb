const Review = require('./review-model');
const ReadPreference = require('mongodb').ReadPreference;

require('./mongo').connect();

function get(req, res) {
  const docquery = Review.find({}).read(ReadPreference.NEAREST);
  docquery
    .exec()
    .then(reviews => {
      res.json(reviews);
    })
    .catch(err => {
      res.status(500).send(err);
    });
}

module.exports = { get };