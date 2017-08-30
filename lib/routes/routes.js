var express = require('express');
var router = express.Router();

router.get('/error', function(req, res, next) {
  res.render('error.html');
});

router.get('/login', function(req, res, next) {
  res.render('login.html');
});

router.get('/:q?', function(req, res, next) {
  res.render('index.html');
});

module.exports = router;
