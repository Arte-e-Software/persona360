const express = require('express');
const router = express.Router();

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