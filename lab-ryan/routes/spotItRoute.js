const express = require('express');
const router = express.Router();
// const SpotIt = require('../models/spotItModel.js');

router.get('/', (req, res) => {

  SpotIt.find({})
  .skip(skip)
  .limit(limit)
  .then(spotIt => {
    SpotIt.count()
    .then(total => {
      res.send({
        cards: cards,
      })
    })
  })
});

// module.exports = router;