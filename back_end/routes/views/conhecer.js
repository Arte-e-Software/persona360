const express = require('express')
    ,router = express.Router();
    ;

router.get('/conhecer', (req, res) => {
  
  res.render('conhecer', {});

});

module.exports = router;