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

function create(req, res) {
  const { id, name, saying } = req.body;

  const review = new Review({ id, name, saying });
  review
    .save()
    .then(() => {
      res.json(review);
    })
    .catch(err => {
      res.status(500).send(err);
    });
}


module.exports = { get, create };