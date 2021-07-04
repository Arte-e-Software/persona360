const router = require('express').Router()
controller = require('../../controller/proxy/index')
    ;

router.get('/', function (req, res) {

    controller(req, res);

});

module.exports = router;