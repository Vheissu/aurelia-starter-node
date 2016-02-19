var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.redirect('/app/');
});

router.get('/views/welcome', function(req, res) {
  res.render('welcome', {nodePort: require('../server').get('port')});
});

module.exports = router;