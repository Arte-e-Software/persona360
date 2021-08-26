const express = require('express')
    ,router = express.Router();
    ;

router.get('/', (req, res) => {
  
  res.render('home', { title: 'Persona360 :)' });

});

module.exports = router;