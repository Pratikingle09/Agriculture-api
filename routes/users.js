var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  // this will send the responce to user
  res.send('respond with a resource');
});

module.exports = router;
