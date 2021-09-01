const express = require('express')
    , router = express.Router()
    ;

module.exports = router.get('/aes', (req, res) => {

   res.render('aes', { title: 'Persona360/aes' })

})