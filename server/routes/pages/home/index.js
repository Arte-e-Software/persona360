const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
  
  res.render('home/index',
  {
    tenant: {
      tenantId: 1,
      title: 'Persona360/adm'
    }
  });

});

module.exports = router;