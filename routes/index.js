var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let background_main = true;
  let background0;
  let background1;
  let background2;
  res.render('index', { background_main, background0, background1, background2 });
});

module.exports = router;
