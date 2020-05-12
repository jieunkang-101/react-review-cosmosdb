const express = require('express');
const router = express.Router();
const reviewService = require('../review-service');

// router.get('/message', function(req, res, next) {
//   res.json('Welcome To React');
// });

router.get('/reviews', function(req, res, next) {
  reviewService.get(req, res);
  // const reviews = [
  //   {
  //     id: 0,
  //     name: 'John',
  //     content: 'Cool!'
  //   }, 
  //   {
  //     id: 1,
  //     name: 'Claire',
  //     content: 'Awesome!'
  //   }
  // ];
  // res.json(reviews);
});  

router.post('/review', function(req, res, next) {
  reviewService.create(req, res);
}); 


module.exports = router;
