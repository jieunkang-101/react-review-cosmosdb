var express = require('express');
var router = express.Router();

// router.get('/message', function(req, res, next) {
//   res.json('Welcome To React');
// });

router.get('/reviews', function(req, res, next) {
  const reviews = [
    {
      id: 0,
      name: 'John',
      saying: 'Cool!'
    }
  ];
 
  res.json('reviews');
});  

module.exports = router;
