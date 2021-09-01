const express = require('express')
    , router = express.Router()
    , sql = require('mssql')
    , banco = require('../database/mssql/conn').aes // pensar em como resolver isso multitenant (switch)
    , Pool = require('../database/mssql/Pool')
    ;

module.exports = router.get('/build/run/table/:action', (req, res) => {

    let  params = { action: req.params.action }
        , erro = params.action === ''
        , result = []
        , error = []
        , factory = require('../../../.builder/factory')
        ;

});