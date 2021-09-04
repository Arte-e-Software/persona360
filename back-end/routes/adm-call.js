const express = require('express')
const router = express.Router()
const conn = require('../database/mssql/conn')
const sql = require('mssql')

module.exports = router.get('/adm', (req, res) => {

    let entities = require('../../config/entities')
        , db = conn['aes'] // em desenvolvimento, virá do do handlerTenant
        , query = ''
        , payload = { "entities": entities }
        ;

    sql.connect(db).then(() => {

        query = `SELECT name as entity, crdate FROM SYSOBJECTS WHERE XTYPE = 'U'`
        return sql.query(query)

    })
        .then(result => {

            payload["result"] = result
            
            console.log(payload)
            sql.close()
            res.render('adm', { title: 'aes/adm', payload: payload, err: false }) // em desenvolvimento, 'aes/adm' virá do handlerTenant

        })

        .catch(err => { sql.close(); res.render('adm', { title: 'aes/adm', result: false, err: err }) })

    sql.on('error', err => { res.render('adm', { title: 'aes/adm', result: false, err: err }) })

})