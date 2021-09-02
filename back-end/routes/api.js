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
      , controller = require(`../entities/${entity}/controllers/${module}`)
      ;
    
      controller(tenantDB, payload, res)

  }
})