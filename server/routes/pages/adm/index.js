const express = require('express');
const router = express.Router();

router.get('/adm', function(req, res) {
  
  res.render('template/adm/index');

});

module.exports = router;