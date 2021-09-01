const express = require('express')
  , router = express.Router()
  , handlerDataError = require('../utils/handlerDataError')
  ;

module.exports = router.all('/api', (req, res) => {

  let error = handlerDataError(req.method, req.body);

  if (error) {

    res.status(500).send(error)

  } else {

    let payload = req.body
      , entity = payload.entity
      , module = payload.module
      , file = `../entities/${entity}/controllers/${module}`
      , status
      , controller
      ;

    try {

      controller = require(file)
      status = 200
      controller(payload, res)

    } catch {

      status = 500
      return res.status(status).send(`Erro de <strong>API</strong> em api/${file.split('../')[1]}`)

    }

  }

})