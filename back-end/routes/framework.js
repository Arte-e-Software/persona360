const express = require('express')
const router = express.Router()

module.exports = router.get('/framework', (req, res) => {

    let entities = {},
        payload = {},
        env = process.env.NODE_ENV

    try {

        // #issue: questionável em 15/09/2021 questionável em 22/09/2021
        entities = require('../../config/entities')
        payload = { "entities": entities, "err": false }
            // #issue: em desenvolvimento, 'aes/framework' virá do handlerTenant
        res.render('pages/framework', { "env": env, "title": 'aes/framework', "payload": payload, "err": false })

    } catch (err) {

        payload = { "entities": entities, "err": err }
            // #issue: em desenvolvimento, 'aes/framework' virá do handlerTenant
        res.render('pages/framework', { "env": env, "title": 'aes/framework', "payload": payload, "err": true })

    }

})