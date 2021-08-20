const express = require('express')
    , router = express.Router()
    , builder = require('../../_builder/builder')
    , config = require('../../config.json')
    , factory = {
        log: require('../../_builder/factory/log')
    }
    ;

module.exports = router.get('/build/run', (req, res) => {

    factory.log(`chamada a /build/run`);
    builder(config.entity, req, res);

});