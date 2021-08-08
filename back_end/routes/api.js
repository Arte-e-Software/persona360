const express = require('express')
    ,router = express.Router();
    ;

router.all('/api/:tenant/:entity/:method', (req, res) => {

  let call = {

    tenant: req.params.tenant, // vou usar na versão multitenant
    entity: req.params.entity,
    method: req.params.method
  
  }
  , controller = require(`../entity/${call.entity}/controller/${call.method}`);
  ;

  controller(call, req, res);

});

module.exports = router;