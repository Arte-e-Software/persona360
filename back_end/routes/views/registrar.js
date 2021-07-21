const express = require('express')
    ,router = express.Router();
    ;

router.get('/registrar', (req, res) => {
  
  res.render('registrar', {});

});

module.exports = router;