const express = require('express')
    , router = express.Router()
    , entity = require('../../config.json').entity
    , factory = require('../../_builder/factory')
    , sql = require('mssql')
    , banco = require('../database/mssql/config').aes // pensar em como resolver isso multitenant (switch)
    ;

module.exports = router.get('/build/run/table/:action', (req, res) => {

    let params = { action: req.params.action }
        , erro = params.action === ''
        , result = []
        , error = []
        , model = ''
        ;

    factory.log(`// TABLE // ${params.action}-table `);

    if (erro) {

        return res.status(500).send({ err: 'Erro: action não permitido' });

    } else {

        for(let i in entity){

            async () => {

                factory.log(`// TABLE // ${params.action}-table ${entity[i].name}`);

                model = require(`../entities/${entity.name}/model/.${params.action}-table.js`);

                try {
                    await sql.connect(banco)
                    result = result.push(await sql.request(model));
                    sql.close();
                }
                catch (err) {

                    error.push(err);
                    sql.close();
                
                }
            } 
        }

       res.send({result: result, error: error, finish: true, entity: entity.map((entity)=>{return entity.name})});

    };

});