const express = require('express');
const router = express.Router();

router.get('/login', (req, res) => {
  
  res.render('login',
  {
    tenant: {
      tenantId: 1,
      title: 'Persona360/adm'
    }
  });

});

module.exports = router;