const express = require('express');
const router = express.Router();

router.get('/adm', function(req, res) {
  
  res.render('adm/index',
  {
    tenant: {
      tenantId: 1,
      title: 'Persona360/adm'
    }
  });

});

module.exports = router;