var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  let jsonResponse = {
    "handsetCards": [
      {imagename:'card1', title: 'Card 1', cols: 2, rows: 1 },
      { title: 'Card 2', cols: 2, rows: 1 },
      { title: 'Card 3', cols: 2, rows: 1 },
      { title: 'Card 4', cols: 2, rows: 1 }

    ],
    "webCards": [
      {imagename:'card1', title: 'Card 1', cols: 2, rows: 1 },
        { title: 'Card 2', cols: 2, rows: 1 },
        { title: 'Card 3', cols: 2, rows: 2 },
        { title: 'Card 4', cols: 1, rows: 1 }
    ]
  };
  res.json(jsonResponse);
});

module.exports = router;
