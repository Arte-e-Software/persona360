const router = require('express').Router()
    , controller = require('../../controller/api/tiny')
    ;

router.get('/api/tiny', function (req, res) {

    controller(req, res);

});

module.exports = router;