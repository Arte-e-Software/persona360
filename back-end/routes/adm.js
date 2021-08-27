const express = require('express')
    , router = express.Router()
    ;

module.exports = router.get('/adm', (req, res) => {

    try {

        let entity = require('../config/config.json').entity
        return res.render('adm', {title: 'Persona360/adm', entity: entity, error: false})

    } catch (err) {

        return res.render('adm', {title: 'Persona360/adm', entity: false, error: err})

    }

})