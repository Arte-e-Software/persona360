const express = require('express')
const router = express.Router()
const controllerError = require('../controller/controller-error')
const conn = require('../database/mssql/conn')
const sql = require('mssql')

module.exports = router.all('/api', (req, res) => {

  let error = controllerError(req.method, req.body)

  if (error) {

    res.status(500).send(error)

  } else {

    let payload = req.body
      , entity = payload.entity
      , module = payload.module
      , params = payload.params
      , db = conn['aes'] // #issue: tenant
      , model = require(`../model/${entity}/${module}`)
      , query = model(params)

    sql.connect(db).then(() => { return sql.query(query) })
      .then(result => { sql.close(); res.status(200).send(result) })
      .catch(err => { sql.close(); res.status(500).send(err) })
    sql.on('error', err => { res.status(500).send(err) })

  }

})