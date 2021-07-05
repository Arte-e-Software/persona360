const router = require('express').Router()
controller = require('../../controller/concierge/index')
    ;

router.get('/', function (req, res) {

    controller(req, res);

});

module.exports = router;