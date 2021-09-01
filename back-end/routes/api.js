const express = require('express')
  , router = express.Router()
  , reqError = require('../utils/reqError')
  ;

module.exports = router.all('/api', (req, res) => {

  /**
   * 
   * Na versão mutitenant o tenantDB será o nome do tenant e virá na req
   * 
   */
  const tenantDB = 'aes'

  let error = reqError(req.method, req.body)

  if (error) {

    res.status(500).send(error)

  } else {

    let payload = req.body
      , entity = payload.entity
      , module = payload.module
      , controller = `../entities/${entity}/controllers/${module}`
      ;

    try {

      return require(controller)(tenantDB, payload, res)

    } catch {

      return res.status(500).send({ "err": `Erro de <strong>API</strong> em api/${file.split('../')[1]}` })

    }

  }

})