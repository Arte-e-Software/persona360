const express = require('express')
    ,router = express.Router();
    ;

router.get('/adm', (req, res) => {
  
  res.render('adm', {});

});

module.exports = router;