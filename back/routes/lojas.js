var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.json([
    {
      name: 'HAHAHAHA BORGES',
      productor: 'MAINSTREET'
    }
  ]);
});

module.exports = router;
