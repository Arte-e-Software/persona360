const express = require('express')
const router = express.Router()
const env = require('dotenv')

module.exports = router.get('/framework', (req, res) => {

    let entities = {}
        , payload = {}
        , env = process.env.NODE_ENV

    try {

        entities = require('../../config/entities')  // questionável em 15/09/2021
        payload = { "entities": entities, "err": false }
        res.render('pages/framework', { "env": env, "title": 'aes/framework', "payload": payload, "err": false }) // em desenvolvimento, 'aes/framework' virá do handlerTenant

    } catch(err) {

        payload = { "entities": entities, "err": err }
        res.render('pages/framework', { "env": env, "title": 'aes/framework', "payload": payload, "err": true }) // em desenvolvimento, 'aes/framework' virá do handlerTenant

    }

})