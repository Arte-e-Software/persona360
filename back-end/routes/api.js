const express = require('express')
  , router = express.Router()
  ;

module.exports = router.all('/api/:version/:entity/:method/', (req, res) => {

  let call = {

    version: req.params.version, // pensar em como fazer na versão multitenant
    entity: req.params.entity,
    method: req.params.method

  }
    , controller = require(`../entity/${call.entity}/controller/${call.method}`);
  ;

  controller(call, req, res);

});