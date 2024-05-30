const express = require('express')
  , router = express.Router();
;

router.get('/', (req, res) => {

  res.render('pages/framework', { title: 'Persona360 :)' });

});

module.exports = router;