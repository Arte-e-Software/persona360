const express = require('express')
const router = express.Router()
const env = require('dotenv')

module.exports = router.get('/adm', (req, res) => {

    let entities = {}
        , payload = {}
        , env = process.env.NODE_ENV

    try {

        entities = require('../../config/entities')
        payload = { "entities": entities, "err": false }
        res.render('pages/adm', { "env": env, "title": 'aes/adm', "payload": payload, "err": false }) // em desenvolvimento, 'aes/adm' virá do handlerTenant

    } catch(err) {

        payload = { "entities": entities, "err": err }
        res.render('pages/adm', { "env": env, "title": 'aes/adm', "payload": payload, "err": true }) // em desenvolvimento, 'aes/adm' virá do handlerTenant

    }

})