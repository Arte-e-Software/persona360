const express = require('express')
    , router = express.Router()
    , factory = require('../../_builder/factory')
    , e = require('../../_builder/')
    , inicio = new Date()
    ;

module.exports = router.get('/build/run', (req, res) => {

    factory.log(`START BUILD - date: ${inicio.toUTCString()} \n`);

    let builder = new Promise((resolve, reject) => {

        factory.mvc(fetch('./').entity);
        resolve();
        reject();

    });

    builder.then(

       function resolve(){

            let fim = new Date()
                , timelapse = fim.getTime() - inicio.getTime()
                ;

            factory.log(`END BUILD - timelapse: ${timelapse/1000}ms \n`);
            res.send({ finish: true, error: false });

        },

        function reject(err){

            factory.log(`ERROR BUILD\n\n${err}\n`);
            res.send({ finish: true, error: err });

        }

    );

});