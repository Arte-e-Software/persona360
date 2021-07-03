const express = require('express')
  , router = express.Router()
  ;

router.get('/adm', (req, res) => {

  res.render('adm',
    {
      tenant: {
        tenantId: 1,
        title: 'Persona360/adm'
      }
    });

});

module.exports = router;