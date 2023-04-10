var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.redirect('/posts')
  //res.render('index'); //index.pug를 렌더
});

module.exports = router;
