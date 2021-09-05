const express = require('express')
    ,router = express.Router();
    ;

router.get('/', (req, res) => {
  
  res.render('pages/home', { title: 'Persona360 :)' });

});

module.exports = router;