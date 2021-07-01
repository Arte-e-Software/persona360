const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  
  res.render('adm/index',
  {
    tenant: {
      tenantId: 1,
      title: req.query.tenant
    }
  });

});

module.exports = router;