const express = require('express')
    , router = express.Router()
    ;

module.exports = router.get('/adm', (req, res) => {

    try {

        let entities = require('../config/entities.json').entity
        return res.render('adm', {title: 'Persona360/adm', entities: entities, error: false})

    } catch (err) {

        return res.render('adm', {title: 'Persona360/adm', entities: false, error: err})

    }

})