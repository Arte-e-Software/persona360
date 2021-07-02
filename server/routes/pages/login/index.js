const express = require('express');
const router = express.Router();

router.get('/login', function(req, res) {
  
  res.render('pages/login/',
  {
    tenant: {
      tenantId: 1,
      title: 'Persona360/adm'
    }
  });

});

module.exports = router;