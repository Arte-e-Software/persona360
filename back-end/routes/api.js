const express = require('express')
  , router = express.Router()
  , reqError = require('../utils/reqError')
  ;

module.exports = router.all('/api', (req, res) => {

  let error = reqError(req.method, req.body);

  if (error) {

    res.status(500).send(error)

  } else {

    let payload = req.body
      , entity = payload.entity
      , module = payload.module
      , controller = `../entities/${entity}/controllers/${module}`
      ;

    try {

      return require(controller)(payload, res)

    } catch {

      return res.status(500).send(`Erro de <strong>API</strong> em api/${file.split('../')[1]}`)

    }

  }

})