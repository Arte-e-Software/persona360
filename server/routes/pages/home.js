const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  
  res.render('home',
  {
    tenant: {
      tenantId: 1,
      title: 'Persona360/adm'
    }
  });

});

module.exports = router;