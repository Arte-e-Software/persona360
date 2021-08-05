const express = require('express')
    ,router = express.Router();
    ;

router.get('/quemsomos', (req, res) => {
  
  res.render('quemsomos', {});

});

module.exports = router;