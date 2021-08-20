const express = require('express')
    , router = express.Router()
    , readme = require('../../_builder/readme.json')
    , fs = require('fs-extra')
    , file = `../../config.json`
    ;

    module.exports = router.get('/build', (req, res) => {

    fs.ensureFile(file)

    .then(() => {

        res.render('build', { readme: readme, config: require(file), finish: false });
        

    })

    .catch((err) => {

        res.render('build', { readme: readme, config: false, finish: false });

    });

});