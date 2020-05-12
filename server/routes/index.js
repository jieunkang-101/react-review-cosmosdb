const express = require('express');
const router = express.Router();

// router.get('/message', function(req, res, next) {
//   res.json('Welcome To React');
// });

router.get('/reviews', function(req, res, next) {
  const reviews = [
    {
      id: 0,
      name: 'John',
      content: 'Cool!'
    }, 
    {
      id: 1,
      name: 'Claire',
      content: 'Awesome!'
    }
  ];
 
  res.json(reviews);
});  

module.exports = router;
