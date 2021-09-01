const express = require('express')
    , router = express.Router()
    ;

module.exports = router.all('/build/run', (req, res) => {

    let payback = {};

    try {

        payback = {
            data: JSON.stringfy(req.body),
            err: false,
            finish: true
        }

    } catch {
        err => {

            payback = {
                data: false,
                err: err,
                finish: true
            }
        }
    }

    res.send(payback)

})